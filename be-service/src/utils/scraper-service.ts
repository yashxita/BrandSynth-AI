import axios, { AxiosError } from 'axios';
import * as cheerio from 'cheerio';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

async function analyzeText(text: string, css:string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `
You are a brand identity analyzer. Return only valid JSON with keys:

- primary_colors: list of 2 hex colors
- typography: {
  "heading_font": {"family": "string", "weight": "string", "style": "string"},
  "body_font": {"family": "string", "weight": "string", "style": "string"}
}
- logo_url: main logo image URL
- alternate_logo_url: alternate logo (dark/light mode)
- image_style_text: short sentence describing image style
- tone_of_voice: short sentence summarizing tone
- sample_images: list of 3 relevant image URLs
- keywords: list of 5-10 brand-related keywords
- neutral_colors: {"light": "hex", "dark": "hex"}
- accent_color: string hex

Content:
${text}

CSS:
${css}

Return **only valid JSON**, no explanation or markdown formatting.
`;

  const result = await model.generateContent(prompt);
  const response = result.response.text();

  const cleaned = response.replace(/```json|```/g, '').trim();

  return cleaned;
}

export async function scrapeUrl(url:string) {
  try {
    const res = await axios.get(url, { timeout: 10000 });
    const $ = cheerio.load(res.data);

    let styles = $('style').map((_, el) => $(el).html()).get().join(' ');

    const cssUrls = $('link[rel="stylesheet"]').map((_, el) => $(el).attr('href')).get();

    for (const href of cssUrls) {
      try {
        const cssRes = await axios.get(new URL(href, url).toString(), { timeout: 5000 });
        styles += cssRes.data;
      } catch {}
    }

    $('[style]').each((_, el) => {
      styles += $(el).attr('style') + ' ';
    });

    const pageText = $('p,h1,h2,h3,span,a,li').map((_, el) => $(el).text()).get().join(' ');

    let logoUrl = $('link[rel*="icon"]').first().attr('href') || $('link[rel*="logo"]').first().attr('href');
    if (!logoUrl && $('header img').length) {
      logoUrl = $('header img').first().attr('src');
    }
    if (logoUrl && !logoUrl.startsWith('http')) {
      logoUrl = new URL(logoUrl, url).toString();
    }

    const geminiOutput = await analyzeText(pageText, styles);
    return JSON.parse(geminiOutput);
  } catch (err) {
    return { error: (err as AxiosError).message || "Failed to process" };
  }
}

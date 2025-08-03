import { type Request, type Response } from 'express';
import { scrapeUrl } from '../utils/scraper-service'

export const crawlWebsite = async (req: Request, res: Response) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: 'URL is required' });
    }

    const result = await scrapeUrl(url);

    res.status(200).json(result);
  } catch (error) {
    console.error('Crawl error:', error);
    res.status(500).json({ message: 'Failed to crawl website' });
  }
};

import { type Request, type Response } from 'express';

export const crawlWebsite = async (req: Request, res: Response) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: 'URL is required' });
    }

    // Dummy crawl logic
    console.log(`Crawling website at: ${url}`);

    res.status(200).json({ message: `Successfully crawled ${url}` });
  } catch (error) {
    console.error('Crawl error:', error);
    res.status(500).json({ message: 'Failed to crawl website' });
  }
};

import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

import connectDB from './config/db';

import authRoutes from './routes/authRoutes';
import brandRoutes from './routes/brandRoutes';
import settingsRoutes from './routes/settingsRoute';
import crawlRoutes from './routes/crawlRoutes';

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB using the centralized db connector
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/crawl', crawlRoutes);
app.get('/ping', (req, res) => {
  res.send('pong');
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

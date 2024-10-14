import express from 'express';
import { nanoid } from 'nanoid';
import cors from 'cors';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/.netlify/functions/api/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = nanoid(8);
  const newUrl = { originalURL: originalUrl, shortURL: shortUrl };
  res.json(newUrl);
});

export const handler = serverless(app);

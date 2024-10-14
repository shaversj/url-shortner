import express from 'express';
import * as path from 'path';
import { nanoid } from 'nanoid';
import cors from 'cors';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/.netlify/functions/api', (req, res) => {
  res.json({ message: 'Welcome to api!' });
});

// app.use('/.netlify/functions/api', router);

export const handler = serverless(app);

// app.use('/assets', express.static(path.join(__dirname, 'assets')));
//
// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to api!' });
// });

/*app.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = nanoid(8);
  const newUrl = { originalURL: originalUrl, shortURL: shortUrl };
  res.json(newUrl);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);*/

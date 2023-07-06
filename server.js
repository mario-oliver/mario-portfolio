//********* EXPRESS SERVER */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

dotenv.config();

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG_KEY,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/', async (req, res) => {
  const { message } = req.body;
  //   console.log(message);
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  //   console.log(response.data.choices[0].text);
  res.json({ message: response.data.choices[0].text });
});

app.get('/models', async (req, res) => {
  const response = await openai.listEngines();
  console.log(response);
  res.json({
    models: response.data,
  });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

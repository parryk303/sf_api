import express, { Express } from 'express';
import router from './server/routes';
import { createWebhook } from './server/utils/utils';

import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// createWebhook();

app.use(express.json({ limit: '10mb', strict: false }));
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server started on ${port}`);
});

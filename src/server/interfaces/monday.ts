import { Request, Response } from 'express';
import mondaySdk from 'monday-sdk-js';
import dotenv from 'dotenv';
dotenv.config();

export const monday = async (req: Request, res: Response) => {
  const { query } = req.query;

  // Authenticate with Monday.com API
  const monday = mondaySdk();
  monday.setApiVersion('2023-10');
  monday.setToken(String(process.env.MONDAY_KEY));
  const queries: any = {
    'listUsers': 'query { users { name } }',
    'getBoardById': 'query { boards(ids: 6553764994) { name } }'
  }
  const responseMessage: any = {}
  if (typeof query === 'string') {
    const selected = queries[query]
    responseMessage.message = await monday.api(selected)
  }

  console.log(`🟡[monday]: listUsers()`);
  res.status(200).json({ message: responseMessage });
};

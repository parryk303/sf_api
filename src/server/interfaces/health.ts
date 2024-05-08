import { Request, Response } from 'express';

export const health = (req: Request, res: Response) => {
  const responseMessage = 'managed-services-balance-tool is up 🟢';
  res.status(200).json({ message: responseMessage });
};

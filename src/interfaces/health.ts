import { Request, Response } from 'express';

export const health = (req: Request, res: Response) => {
  const responseMessage = 'wm-api is up 🟢';
  res.status(200).json({ message: responseMessage });
};

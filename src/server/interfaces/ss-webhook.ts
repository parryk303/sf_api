import { Request, Response } from 'express';

export const smartsheetWebhook = (req: Request, res: Response) => {
  const event = req.body;
  const responseMessage = 'Received webhook event';
  console.log('Received webhook event: ', event);
  res.status(200).json({ message: responseMessage, event: event });
};

import { Request, Response } from 'express';

export const smartsheetWebhook = (req: Request, res: Response) => {
  const challenge = req.header('smartsheet-hook-challenge')
  if (challenge) {
    console.log(`Smartsheet challenge received: ${challenge}`)
    res.send(challenge)
  } else {
    console.log('Webhook notification received:')
    const { events } = req.body
    console.log('Full events array =>', events)
    const responseMessage = 'Received webhook event';
    console.log('🔵[smartsheet]: Received webhook event', events);
    res.status(200).json({ message: responseMessage, event: events });
  }
};

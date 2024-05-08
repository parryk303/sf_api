import { health } from '../interfaces/health';
import { smartsheetWebhook } from '../interfaces/ss-webhook';
import { oauth2 } from '../interfaces/oauth2';
import { monday } from '../interfaces/monday';
import { smartsheet } from '../interfaces/smartsheet';
import { salesforce } from '../interfaces/salesforce';
import { sendSuccessResponse } from '../utils/utils';
import express from 'express';

const router = express.Router();
router.get('/api/ss-webhook', smartsheetWebhook);
router.get('/api/smartsheet', smartsheet);
router.get('/api/salesforce', salesforce);
router.get('/api/monday', monday);
// router.get('/oauth', oauth2);
router.get('/health', health);
router.get('/api/version', (req, res) => {
  sendSuccessResponse({
    res,
    data: {
      release: process.env.RELEASE_NUMBER || 0.1,
      build: process.env.BUILD_NUMBER || 0.1,
      date: process.env.BUILD_DATE || new Date().toISOString().replace('T', ' ').slice(0, 19),
    },
    message: null,
    statusCode: 200,
  });
});

export default router;


import { smartsheetWebhook } from '../interfaces/ss-webhook';
import { smartsheet } from '../interfaces/smartsheet';
import { monday } from '../interfaces/monday';
import { health } from '../interfaces/health';
import express from 'express';

const router = express.Router();
router.post('/api/ss-webhook', smartsheetWebhook);
router.get('/api/smartsheet', smartsheet);
router.get('/api/monday', monday);
router.get('/health', health);

export default router;

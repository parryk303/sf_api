import { health } from '../interfaces/health';
import { oauth2 } from '../interfaces/oauth2';
import express from 'express';

const router = express.Router();
router.get('/health', health);
router.get('/oauth', oauth2);

export default router;

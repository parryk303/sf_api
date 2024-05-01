import { health } from '../interfaces/health';
import { oauth2 } from '../interfaces/oauth2';
import { sendSuccessResponse } from '../utils/utils';
import express from 'express';

const router = express.Router();
router.get('/health', health);
// router.get('/oauth', oauth2);
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

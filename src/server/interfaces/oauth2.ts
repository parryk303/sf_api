import { Request, Response } from 'express';
import logger from '../utils/logger';
import dotenv from 'dotenv';

dotenv.config();

const redirect_uri = String('http://localhost:3000/oauth');

export const oauth2 = async (req: Request, res: Response) => {
  const { access_token } = req.query; // Retrieve access token from query parameters
  const { state } = req.query;

  // Set state to redirect_uri if it is not present in req.query
  let newState = state || redirect_uri;

  // Use console.log for debugging purposes
  console.log('original url:', req.originalUrl);
  console.log('Access Token:', access_token);
  console.log('State:', newState);

  try {
    if (access_token) {
      res.redirect('health');
    } else {
      res.redirect(`https://login.salesforce.com/services/oauth2/authorize?response_type=token&client_id=${process.env.SF_KEY}&redirect_uri=${redirect_uri}&state=${newState}`);
    }
  } catch (e: any) {
    logger.error({
      message: { customMessage: 'Error in oauth2 controller', errorMessage: e.message, stack: e.stack },
      request: req,
      response: res,
    });
    if (e.message == 'Access denied') {
      // res.redirect(`${redirect_uri}/access-denied?error=${accessDeniedMessage}`);
    } else {
      if (req.query && state && !req.query.error) {
        res.redirect(`${state}?error=${e.message}`);
      } else {
        res.redirect(`${newState}?error=${e.message}`);
      }
    }
  }
};

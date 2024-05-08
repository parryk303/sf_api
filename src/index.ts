import express, { Express } from 'express';
import router from './server/routes';

import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb', strict: false }));
app.use(router);

// app.get('/api/accounts', function (req: any, res) {
//   // if auth has not been set, redirect to index
//   if (!req.session.accessToken || !req.session.instanceUrl) { res.redirect('/'); }
//   //SOQL query
//   let q = 'SELECT id, name FROM account LIMIT 10';
//   //instantiate connection
//   let conn = new jsforce.Connection({
//     oauth2: oauth2,
//     accessToken: req.session.accessToken,
//     instanceUrl: req.session.instanceUrl
//   });
//   //set records array
//   let records: any = [];
//   let query: any = conn.query(q)
//     .on('record', function (record: any) {
//       records.push(record);
//     })
//     .on('end', function () {
//       console.log('total in database : ' + query.totalSize);
//       console.log('total fetched : ' + query.totalFetched);
//       res.json(records);
//     })
//     .on('error', function (err: any) {
//       console.error(err);
//     })
//     .run({ autoFetch: true, maxFetch: 4000 });
// });
// /**
// * Login endpoint
// */
// app.get('/auth/login', function (req, res) {
//   // Redirect to Salesforce login/authorization page
//   res.redirect(oauth2.getAuthorizationUrl({ scope: 'api id web refresh_token' }));
// });
// /**
// * Login callback endpoint (only called by Force.com)
// */
// app.get('/token', function (req: any, res) {

//   const conn = new jsforce.Connection({ oauth2: oauth2 });
//   const code = req.query.code;
//   conn.authorize(code, function (err: any, userInfo: any) {
//     if (err) { return console.error('This error is in the auth callback: ' + err); }

//     console.log('Access Token: ' + conn.accessToken);
//     console.log('Instance URL: ' + conn.instanceUrl);
//     console.log('refreshToken: ' + conn.refreshToken);
//     console.log('User ID: ' + userInfo.id);
//     console.log('Org ID: ' + userInfo.organizationId);

//     req.session.accessToken = conn.accessToken;
//     req.session.instanceUrl = conn.instanceUrl;
//     req.session.refreshToken = conn.refreshToken;

//     var string = encodeURIComponent('true');
//     // res.redirect('http://localhost:3000/?valid=' + string);
//   });
// });

// Serve static assets
app.use(express.static('./build'));

app.listen(port, () => {
  console.log(`⚡️[server]: Server started on ${port}`);
});

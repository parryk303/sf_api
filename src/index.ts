import express, { Express, Request, Response } from 'express';
import mondaySdk from 'monday-sdk-js';
import router from './server/routes';
import jsforce from 'jsforce';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb', strict: false }));
app.use(router);

// Authenticate with Monday.com API
const monday = mondaySdk();
monday.setApiVersion('2023-10');
monday.setToken(String(process.env.MONDAY_KEY));
monday.api('query { users { name } }').then(res => console.log(JSON.stringify(res)))

// Salesforce credentials
const username = `${process.env.USER}`;
const password = `${process.env.TOKEN}`;

// Create a connection to Salesforce
const conn = new jsforce.Connection({ loginUrl: 'https://login.salesforce.com' });

// Authenticate with Salesforce password
// conn.login(username, password, function (err: any, userInfo: any) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('Logged in as: ' + userInfo.id, JSON.stringify(userInfo));

//   // Query to fetch users
//   const query = 'SELECT Id, Name, Email FROM User';

//   // Execute the query
//   conn.query(query, function (err: any, result: any) {
//     if (err) {
//       return console.error(err);
//     }
//     console.log('Total users: ' + result.totalSize);
//     console.log('First user: ' + JSON.stringify(result.records[0]));
//   });
// });

//jsForce connection
const oauth2 = new jsforce.OAuth2({
  // you can change loginUrl to connect to sandbox or prerelease env.
  loginUrl: 'https://ringcentral13-dev-ed.develop.my.salesforce.com',
  //clientId and Secret will be provided when you create a new connected app in your SF developer account
  clientId: process.env.SF_KEY,
  clientSecret : process.env.SECRET,
  redirectUri: 'http://localhost:3000/token'
});

app.get('/api/accounts', function (req: any, res) {
  // if auth has not been set, redirect to index
  if (!req.session.accessToken || !req.session.instanceUrl) { res.redirect('/'); }
  //SOQL query
  let q = 'SELECT id, name FROM account LIMIT 10';
  //instantiate connection
  let conn = new jsforce.Connection({
    oauth2: oauth2,
    accessToken: req.session.accessToken,
    instanceUrl: req.session.instanceUrl
  });
  //set records array
  let records: any = [];
  let query: any = conn.query(q)
    .on('record', function (record: any) {
      records.push(record);
    })
    .on('end', function () {
      console.log('total in database : ' + query.totalSize);
      console.log('total fetched : ' + query.totalFetched);
      res.json(records);
    })
    .on('error', function (err: any) {
      console.error(err);
    })
    .run({ autoFetch: true, maxFetch: 4000 });
});

// Serve static assets
app.use(express.static('./build'));

/**
* Login endpoint
*/
app.get('/auth/login', function (req, res) {
  // Redirect to Salesforce login/authorization page
  res.redirect(oauth2.getAuthorizationUrl({ scope: 'api id web refresh_token' }));
});

/**
* Login callback endpoint (only called by Force.com)
*/
app.get('/token', function (req: any, res) {

  const conn = new jsforce.Connection({ oauth2: oauth2 });
  const code = req.query.code;
  conn.authorize(code, function (err: any, userInfo: any) {
    if (err) { return console.error('This error is in the auth callback: ' + err); }

    console.log('Access Token: ' + conn.accessToken);
    console.log('Instance URL: ' + conn.instanceUrl);
    console.log('refreshToken: ' + conn.refreshToken);
    console.log('User ID: ' + userInfo.id);
    console.log('Org ID: ' + userInfo.organizationId);

    req.session.accessToken = conn.accessToken;
    req.session.instanceUrl = conn.instanceUrl;
    req.session.refreshToken = conn.refreshToken;

    var string = encodeURIComponent('true');
    // res.redirect('http://localhost:3000/?valid=' + string);
  });
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server started on ${port}`);
});

import express, { Express, Request, Response } from 'express';
import mondaySdk from 'monday-sdk-js';
const jsforce = require('jsforce');
import router from './routes';
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
conn.login(username, password, function (err: any, userInfo: any) {
  if (err) {
    return console.error(err);
  }
  console.log('Logged in as: ' + userInfo.id, JSON.stringify(userInfo));

  // Query to fetch users
  const query = 'SELECT Id, Name, Email FROM User';

  // Execute the query
  conn.query(query, function (err: any, result: any) {
    if (err) {
      return console.error(err);
    }
    console.log('Total users: ' + result.totalSize);
    console.log('First user: ' + JSON.stringify(result.records[0]));
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server started on ${port}`);
});

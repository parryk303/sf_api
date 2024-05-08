import { ApiClient } from '@mondaydotcomorg/api';
import { Request, Response } from 'express';
import jsforce from 'jsforce';
import dotenv from 'dotenv';
dotenv.config();

export const salesforce = async (req: Request, res: Response) => {
  // const queryVariables: QueryBoardsArgs = { ids: ["your_board_id"] }; // replace with your board id
  // const queryData = await client.query<GetBoardsQuery>(exampleQuery, queryVariables);

  // const mutationVariables: CreateItemMutationVariables = {
  //   boardId: "your_board_id", // replace with your board id
  //   groupId: "your_groyup_id", // replace with your group id
  //   itemName: "Im using my own queries!",
  // };
  // const mutationData = await client.query<CreateItemMutation>(exampleMutation, mutationVariables);

  // Salesforce credentials
  const password = `${process.env.TOKEN}`;
  const username = `${process.env.USER}`;

  // Create a connection to Salesforce
  const conn = new jsforce.Connection({ loginUrl: 'https://login.salesforce.com' });

  // Authenticate with Salesforce password
  const responseMessage = await conn.login(username, password, function (err: any, userInfo: any) {
    if (err) {
      return console.error(err);
    }
    console.log('Logged in as: ' + userInfo.id, JSON.stringify(userInfo));

    // Query to fetch users
    const query = 'SELECT Id, Name, Email FROM User';

    // Execute the query
    try {
      return conn.query(query)
    } catch (error: any) {
      return { 'ERROR': error }
    }
  });
  res.status(200).json({ message: responseMessage });
};

//jsForce oauth2 connection
// const oauth2 = new jsforce.OAuth2({
//   // you can change loginUrl to connect to sandbox or prerelease env.
//   loginUrl: 'https://ringcentral13-dev-ed.develop.my.salesforce.com',
//   //clientId and Secret will be provided when you create a new connected app in your SF developer account
//   clientId: process.env.SF_KEY,
//   clientSecret: process.env.SECRET,
//   redirectUri: 'http://localhost:3000/token'
// });

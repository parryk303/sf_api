import { ApiClient } from '@mondaydotcomorg/api';
import { Request, Response } from 'express';
import mondaySdk from 'monday-sdk-js';
import dotenv from 'dotenv';
dotenv.config();

export const monday = async (req: Request, res: Response) => {
  const client = new ApiClient(String(process.env.MONDAY_KEY));

  // const queryVariables: QueryBoardsArgs = { ids: ["your_board_id"] }; // replace with your board id
  // const queryData = await client.query<GetBoardsQuery>(exampleQuery, queryVariables);

  // const mutationVariables: CreateItemMutationVariables = {
  //   boardId: "your_board_id", // replace with your board id
  //   groupId: "your_groyup_id", // replace with your group id
  //   itemName: "Im using my own queries!",
  // };
  // const mutationData = await client.query<CreateItemMutation>(exampleMutation, mutationVariables);

  // Authenticate with Monday.com API
  const monday = mondaySdk();
  monday.setApiVersion('2023-10');
  monday.setToken(String(process.env.MONDAY_KEY));
  const responseMessage = await monday.api('query { users { name } }')

  res.status(200).json({ message: responseMessage });
};

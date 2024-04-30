import { ApiClient } from '@mondaydotcomorg/api';
import { Request, Response } from 'express';
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
  const responseMessage = 'monday is up 🟢';
  res.status(200).json({ message: responseMessage });
};

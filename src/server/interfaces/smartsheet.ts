
import { Sheet, ListResult, Row } from '../utils/typings';
import { Request, Response } from 'express';
import * as Smartsheet from 'smartsheet';
import csv from 'csvtojson';
import dotenv from 'dotenv';

import fs from 'fs';
dotenv.config();

export const smartsheet = async (req: Request, res: Response) => {
  // Authenticate with Smartsheet API
  const smartsheet = new Smartsheet.createClient({ accessToken: process.env.SMARTSHEET_KEY });

  // Example: Get a list of sheets
  async function listSheets(): Promise<ListResult<Sheet>> {
    try {
      const response = await smartsheet.sheets.listSheets();
      return response;
    } catch (error: any) {
      console.error(error);
      throw error;
    }
  }

  // Example: Get a sheet by ID
  async function getSheetById(sheetId: number) {
    var response: any = '';
    try {
      response = await smartsheet.sheets.getSheet({ sheetId });
    } catch (error: any) {
      console.error(error);
      throw error;
    }
    return response;
  }

  // Example: Get rows from a sheet
  async function getSheetRows(sheetId: number, rowId: number): Promise<Array<Row>> {
    const result = smartsheet.sheets.getRow({ sheetId, rowId })
      .then(function (row: any) {
        return row;
      })
      .catch(function (error: any) {
        return error;
      });
    return result;
  }

  // Example: Get rows from a sheet
  async function getSheetAsFile(sheetId: number) {
    const result: { json: any, csv: string } = { json: '', csv: '' };
    await smartsheet.sheets.getSheetAsCSV({
      id: sheetId,
      format: 'csv', // or 'excel'
      downloadPath: './sheet.csv', // or './sheet.xlsx' for Excel
    })
      .then((response: any) => {
        result.csv = response;
      })
      .catch((error: any) => {
        console.error('Error downloading sheet:', error);
      });
    if (result?.csv !== '') {
      await csv({
        noheader: false,
        output: "json"
      }).fromString(responseMessage.csv).then((response: any) => {
        result.json = response;
      })
    };

    return result;
  }

  // const responseMessage = await listSheets();
  // const responseMessage = await getSheetById(2888478287155076);
  // const responseMessage = await getSheetRows(2888478287155076, 6134730668068740);
  const responseMessage = await getSheetAsFile(2888478287155076);

  // Write to CSV file
  if (responseMessage) {
    // const lines = responseMessage?.csv.split("\n");
    // const writeStream = fs.createWriteStream('output.csv');
    // lines.forEach(line => {
    //   // Split each line into fields
    //   const fields = line.split(",");
    //   // Write the fields to the CSV file
    //   writeStream.write(fields.join(",") + '\n');
    // });

    // writeStream.end();
    try {
      responseMessage.json = await csv({
        noheader: false,
        output: "json"
      }).fromString(responseMessage.csv)
    } catch (error) {
      console.log('Error:', error);
    }
  }


  res.status(200).json({ message: responseMessage });
};

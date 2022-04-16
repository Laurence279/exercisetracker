import * as express from "express";
import {Request, Response} from 'express'
import db from "./db/connection";

const exampleUser = {
  username: "fcc_test",
  _id: "5fb5853f734231456ccb3b05"
}

interface IUser {
  username: string;
}

async function createUser(username: IUser){

  const user = await db.query(
    `INSERT INTO users (username) VALUES ($1) RETURNING *;`,
    [username.username]
  );
  // Save user to DB

  return user.rows[0];
}

export const mount = ( app: express.Application ) => {

    // define a route handler for the default home page
    app.get('/', (req: Request, res: Response): void => {
        res.sendFile(__dirname + '/views/index.html')
      });

    app.post('/api/users', async (req: Request, res:Response): Promise<any> => {

      const newUser = await createUser({username: req.body.username});
      
      console.log("New user:", newUser);

      res.json(newUser)
    })

};
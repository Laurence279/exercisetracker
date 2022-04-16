import * as express from "express";
import {Request, Response} from 'express'


export const mount = ( app: express.Application ) => {

    // define a route handler for the default home page
    app.get('/', (req: Request, res: Response): void => {
        res.sendFile(__dirname + '/views/index.html')
      });

};
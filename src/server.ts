import express from 'express'

const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
import * as routes from "./router";

// initialize configuration
dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'))


// Configure routes
routes.mount( app );






app.listen(process.env.PORT || 3000, (): void => {
  console.log('Your app is listening on port ' + port)
})

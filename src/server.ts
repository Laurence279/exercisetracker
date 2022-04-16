import express from 'express'
import {Request, Response} from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'

// initialize configuration
dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.static('public'))



app.get('/', (req: Request, res: Response): void => {
  res.sendFile(__dirname + '/views/index.html')
});





app.listen(process.env.PORT || 3000, (): void => {
  console.log('Your app is listening on port ' + port)
})

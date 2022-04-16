// this environment variable gets handed to us by heroku if we use the postgres add-on
import dotenv from 'dotenv'
dotenv.config();

export const connectionString = process.env.DATABASE_URI;
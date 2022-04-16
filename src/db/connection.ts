import pg from "pg";

import { connectionString } from "../config";

const pool = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;
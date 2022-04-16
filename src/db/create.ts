import db from "./connection";


async function create(){

    const response = await db.query(
        `
        DROP TABLE users;
        CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(20));
        `
      );

      console.log(response);

      db.end();

}

create();

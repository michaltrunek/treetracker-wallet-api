require("dotenv").config();

const knexConfig = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: true,
  },
  debug: false,
  searchPath: [process.env.DB_SCHEMA],
};

const knex = require("knex")(knexConfig);

module.exports = knex;

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "983610",
  port: "5433"
});

module.exports = pool;

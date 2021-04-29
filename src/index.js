const express = require("express");

const cors = require("cors");

const Sequalize = require("sequelize");

const sequelize = new Sequalize(
  "postgres://postgres:postgres@localhost:5433/test"
);

const db = {};

db.Sequalize = Sequalize;
db.sequelize = sequelize;

db.todoRoutes = require("./config/db")(sequelize, Sequalize);

module.exports = db;

const app = express();

const todoRoutes = require("./routes/todos");

app.use(express.json());

app.use(cors());

app.use(
  express.urlencoded({
    extended: true
  })
);

app.set("view engine", "ejs");

app.set("views", "src/views/pages");

app.use("/static", express.static(`${__dirname}/public`));

app.use(todoRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`app started on port ${PORT}`);
});

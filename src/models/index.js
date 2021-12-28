const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5000/backend");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todo = require("./Todo_model.js")(sequelize, Sequelize);

module.exports = db;
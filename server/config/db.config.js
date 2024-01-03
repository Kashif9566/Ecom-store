const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("EcomStore", "postgres", "9324", {
  host: "localhost",
  dialect: "postgres",
});
module.exports = sequelize;

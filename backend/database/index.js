const dbConfig = require("./config/postgress");
const Sequelize = require("sequelize");

const connection = new Sequelize(dbConfig);

module.exports = connection;

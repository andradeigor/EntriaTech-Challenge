const dbConfig = require("./config/postgress");
const Sequelize = require("sequelize");

const UserModel = require("./models/UserModel");
const connection = new Sequelize(dbConfig);

UserModel.init(connection);
module.exports = connection;

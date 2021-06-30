const dbConfig = require("./config/postgress");
const Sequelize = require("sequelize");

const UserModel = require("./models/UserModel");
const CapivaraModel = require("./models/CapivaraModel")
const connection = new Sequelize(dbConfig);

UserModel.init(connection);
CapivaraModel.init(connection)
CapivaraModel.associate(connection.models)
module.exports = connection;

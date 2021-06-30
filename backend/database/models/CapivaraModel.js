const {Model, DataTypes} = require("sequelize");

class Capivaras extends Model{
    static init(connection){
        super.init(
            {
                name: DataTypes.STRING,
                imageURL: DataTypes.STRING,
                likes: DataTypes.INTEGER
            },
            {
                sequelize: connection
            }
        )
    }
    static associate(models){
        this.belongsTo(models.User, {foreignKey: "userId", as: "owner"})
    }
}
module.exports = Capivaras
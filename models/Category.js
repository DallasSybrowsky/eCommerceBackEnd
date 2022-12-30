const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
// console.log(sequelize);
class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);
Category.create({ category_name: "tuna fish" });
module.exports = Category;

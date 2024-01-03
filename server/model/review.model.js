const sequelize = require("../config/db.config");
const { DataTypes } = require("sequelize");

const Review = sequelize.define(
  "review",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = Review;

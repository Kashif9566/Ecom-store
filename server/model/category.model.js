const sequelize = require("../config/db.config");
const { DataTypes } = require("sequelize");
const slugify = require("slugify");

const Category = sequelize.define(
  "category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

Category.beforeCreate((category) => {
  category.slug = generateSlug(category.name);
});

Category.beforeUpdate((category) => {
  category.slug = generateSlug(category.name);
});

function generateSlug(name) {
  return slugify(name, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
}

module.exports = Category;

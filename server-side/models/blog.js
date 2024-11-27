'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blog.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  Blog.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Title is Required"
        },
        notNull: {
          msg: "Title is Required"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Description is Required"
        },
        notNull: {
          msg: "Description is Required"
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Image is Required"
        },
        notNull: {
          msg: "Image is Required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};
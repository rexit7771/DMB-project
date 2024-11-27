'use strict';
const {
  Model
} = require('sequelize');
const { hashing } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Blog, { foreignKey: "UserId" });
      User.hasMany(models.Product, { foreignKey: "UserId" });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name is Required"
        },
        notNull: {
          msg: "Name is Required"
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Username is Required"
        },
        notNull: {
          msg: "Username is Required"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password is Required"
        },
        notNull: {
          msg: "Password is Required"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "member"
    }
  }, {
    hooks: {
      beforeCreate: (instance, options) => instance.password = hashing(instance.password)
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
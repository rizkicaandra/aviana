'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kyc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kyc.belongsTo(models.User, {foreignKey: 'Userid'})
    }
  };
  Kyc.init({
    Userid: DataTypes.INTEGER,
    ktp: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    selfieUser: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    statusApproval: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Kyc',
  });
  return Kyc;
};
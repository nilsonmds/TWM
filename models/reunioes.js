'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reunioes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Reunioes.init({
    userId: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    assunto: DataTypes.STRING,
    datareuniao: DataTypes.STRING,
    hora: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reunioes',
  });
  return Reunioes;
};
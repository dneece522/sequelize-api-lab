'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Animal.hasMany(models.Feeding, {
        foreignKey: 'animalId',
        as: 'feedings'
      })
    }
  }
  Animal.init({
    animal: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    animalType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};
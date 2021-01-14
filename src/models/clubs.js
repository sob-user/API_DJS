'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clubs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.Dj,  {foreignKey: "club_id", as: "djs"})
    }
  };
  Clubs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
      },
      name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Clubs',
  });
  return Clubs;
};
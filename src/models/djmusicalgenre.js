'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Dj, {
      //     foreignKey: "dj_id"
      //   })

      // this.belongsTo(models.Musicalgenre, {
      //   foreignKey: "musicalgenre_id"
      // })
    }
  };
  DjMusicalgenres.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    dj_id: {
      type: DataTypes.UUID, 
      allowNull: false,
      onDelete: "CASCADE"
    },
    musicalgenre_id: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'DjMusicalgenres',
  });
  return DjMusicalgenres;
};
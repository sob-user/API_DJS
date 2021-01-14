'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DjMusicalgenres', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        default: Sequelize.fn("uuid_generate_V4")
      },
      dj_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Djs",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      musicalgenre_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Musicalgenres",
          key: "id"
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DjMusicalgenres');
  }
};
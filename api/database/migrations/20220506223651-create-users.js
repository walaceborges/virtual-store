'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
      },
      balance: {
        type: Sequelize.INTEGER,
        defaultValue: 5000,
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};
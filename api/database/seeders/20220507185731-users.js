'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Walace de Abreu Borges',
        email: 'walacewab@gmail.com',
        password: 'FullstackDeveloperHired',
        balance: '10000',
      },
      {
        name: 'Thiago T.Ferreira',
        email: 'thiago@thiago.com',
        password: '.NET2900success',
        balance: '8000',
      },
      {
        name: 'Denise Matta Pinheiro',
        email: 'denise@denise.com',
        password: 'h&lphit',
        balance: '6000',
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
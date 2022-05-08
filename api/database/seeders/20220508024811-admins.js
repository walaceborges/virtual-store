'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('admins', [
      {
        name: 'admin',
        password: 'admin',
      },
      {
        name: 'Anne Oliveira',
        password: 'scrumMaster',
      },
      {
        name: 'Eduardo Gomes',
        password: 'co-founder1',
      },
      {
        name: 'Giovanni Gomes',
        password: 'co-founder2',
      },
      {
        name: 'David Enterlein',
        password: 'co-founder3',
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
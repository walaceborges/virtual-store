'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('admins', [
      {
        name: 'admin',
        email: 'admin@admin.com',
        password: 'adminMain',
      },
      {
        name: 'Anne Oliveira',
        email: 'anne@anne.com',
        password: 'scrumMaster',
      },
      {
        name: 'Eduardo Gomes',
        email: 'eduardo@eduardo.com',
        password: 'co-founder1',
      },
      {
        name: 'Giovanni Gomes',
        email: 'giovanni@giovanni.com',
        password: 'co-founder2',
      },
      {
        name: 'David Enterlein',
        email: 'david@david.com',
        password: 'co-founder3',
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
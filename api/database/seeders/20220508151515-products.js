'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Rio de Janeiro',
        price: '1500',
        image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg',
      },
      {
        name: 'São Paulo',
        price: '1300',
        image: 'https://www.euandopelomundo.com/wp-content/uploads/2019/04/sao_paulo.jpg',
      },
      {
        name: 'Paraná',
        price: '1200',
        image: 'https://mundogeo.com/wp-content/uploads/2015/08/foto-aerea-curitiba.jpg',
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
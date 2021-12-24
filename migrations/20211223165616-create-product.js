'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable(
       'products',
     {
       id: Sequelize.UUID,
      type: Sequelize.STRING,
      item: Sequelize.STRING,
      measure: Sequelize.STRING,
      measurevalue: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pricetype: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pricevalue: Sequelize.STRING,
     });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('products');
  }
};

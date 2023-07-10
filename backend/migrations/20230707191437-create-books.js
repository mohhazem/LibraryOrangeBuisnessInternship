'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookName: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull:true
      },
      genre: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      authorId: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};

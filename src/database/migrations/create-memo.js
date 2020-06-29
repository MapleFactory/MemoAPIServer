'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Memos', {
      memoId: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      memoName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      memoAuthor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      memoOpen: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      memoContent: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Memos');
  }
};
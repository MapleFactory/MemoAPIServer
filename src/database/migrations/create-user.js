'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      userId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      userPw: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nickname: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      motto: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
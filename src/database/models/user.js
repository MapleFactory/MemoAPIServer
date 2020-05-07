'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    userId: DataTypes.STRING,
    userPw: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    userId: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    userPw: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
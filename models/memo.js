'use strict';
module.exports = (sequelize, DataTypes) => {
  const Memo = sequelize.define('Memo', {
    memoId: DataTypes.INTEGER.UNSIGNED,
    memoName: DataTypes.STRING,
    memoAuthor: DataTypes.STRING,
    memoOpen: DataTypes.BOOLEAN,
    memoContent: DataTypes.STRING,
    upMemoId: DataTypes.INTEGER.UNSIGNED,
    downMemoId: DataTypes.INTEGER.UNSIGNED
  }, {});
  Memo.associate = function(models) {
    // associations can be defined here
  };
  return Memo;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Memo = sequelize.define('Memos', {
    memoId: DataTypes.INTEGER.UNSIGNED,
    memoName: DataTypes.STRING,
    memoAuthor: DataTypes.STRING,
    memoOpen: DataTypes.BOOLEAN,
    memoContent: DataTypes.STRING,
    upMemoId: DataTypes.INTEGER.UNSIGNED,
    downMemoId: DataTypes.INTEGER.UNSIGNED
  }, {
    freezeTableName: true,
    timestamps: false
  });
  Memo.associate = function(models) {
    // associations can be defined here
  };
  return Memo;
};
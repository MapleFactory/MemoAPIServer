'use strict';
module.exports = (sequelize, DataTypes) => {
  const Memo = sequelize.define('Memos', {
    memoId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    memoName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memoAuthor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memoOpen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    memoContent: {
      type: DataTypes.STRING
    },
    upMemoId: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    downMemoId: {
      type: DataTypes.INTEGER.UNSIGNED
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  Memo.associate = function(models) {
    // associations can be defined here
  };
  return Memo;
};
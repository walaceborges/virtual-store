const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const Admin = sequelize.define(
    'Admin',
    Attributes,
    {
      underscored: false,
      timestamps: false,
      tableName: 'admins',
    },
  );

  return Admin;
};
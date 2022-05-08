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
  price: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const Product = sequelize.define(
    'Product',
    Attributes,
    {
      underscored: false,
      timestamps: false,
      tableName: 'products',
    },
  );

  return Product;
};
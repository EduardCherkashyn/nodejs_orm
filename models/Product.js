module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'product',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV4,
      },
      item: DataTypes.STRING,
      type: DataTypes.STRING,
      measure: DataTypes.STRING,
      measureValue: {
        type: DataTypes.INTEGER,
        field: 'measurevalue',
        allowNull: false,
      },
      priceType: {
        type: DataTypes.STRING,
        field: 'pricetype',
        allowNull: false,
      },
      pricevalue: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};

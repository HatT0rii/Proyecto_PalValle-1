'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facturacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Facturacion.belongsTo(models.Cliente, {foreignKey: 'id_cliente', as: 'clientes'})
    }
  };
  Facturacion.init({
    fecha: DataTypes.DATE,
    precio_total:DataTypes.FLOAT,
    id_cliente: DataTypes.INTEGER,
    estado: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Facturacion',
  });
  return Facturacion;
};
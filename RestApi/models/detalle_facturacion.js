'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detalle_Facturacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Detalle_Facturacion.belongsTo(models.Facturacion, {foreignKey: 'id_facturacion', as: 'facturacions'});
      Detalle_Facturacion.belongsTo(models.Producto, {foreignKey: 'id_producto', as: 'products'});
    }
  };
  Detalle_Facturacion.init({
    id_facturacion: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Detalle_Facturacion',
  });
  return Detalle_Facturacion;
};
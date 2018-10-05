'use strict';
module.exports = (sequelize, DataTypes) => {
  var nov2018 = sequelize.define('nov2018', {
    userId: DataTypes.INTEGER,
    i940: DataTypes.STRING,
    i1631: DataTypes.STRING,
    i1634: DataTypes.STRING,
    i1639: DataTypes.STRING,
    av19: DataTypes.STRING
  }, {});
  nov2018.associate = function(models) {
    models.nov2018.belongsTo(models.user);
  };
  return nov2018;
};
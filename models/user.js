var bcrypt = require('bcrypt');

'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "please. enter. a valid. email."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
          len: {
            args: [8,16],
            msg: "password must be 8-16 characters"
          }
      }
    },
    dob: DataTypes.DATE,
    voted: DataTypes.BOOLEAN,
    address: DataTypes.STRING
    }, {
    hooks: {
      beforeCreate: function(pendingUser) {
        if(pendingUser && pendingUser.password){
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        }
      }
    }
  });
  user.associate = function(models) {
    models.user.hasMany(models.nov2018); //Connects this model to the nov 2018 model
  };

  user.prototype.isValidPassword = function(typedPassword){
    return bcrypt.compareSync(typedPassword, this.password);
  }


  return user;
};
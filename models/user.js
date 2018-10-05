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
    address: {
      type:DataTypes.STRING,
     }
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
    // associations can be defined here
  };

  user.prototype.isValidPassword = function(typedPassword){
    return bcrypt.compareSync(typedPassword, this.password);
  }


  return user;
};
module.exports =(sequelize, DatatTypes)=>{
    const bcrypt = require('bcrypt');

    const User = sequelize.define("User",{

      email: {
            type: DatatTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true,
            }
        },

       password: {
            type: DatatTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true,
            }
        }
    });


    // User.beforeSave((user, options) => {
    //     if (user.changed('password')) {
    //       user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    //     }
    //   });

    //   User.prototype.comparePassword = function (passw, cb) {
    //     bcrypt.compare(passw, this.password, function (err, isMatch) {
    //         if (err) {
    //             return cb(err);
    //         }
    //         cb(null, isMatch);
    //     });
    // ;}
        return User ;
    };

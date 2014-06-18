 var mongoose = require('../connection/connection.js');
 var userSchema = new mongoose.Schema({
     userName: {
         type: String
     },
    passWord:{
          type:String
    },
     age: {
         type:String
     },
     sex:{
     	type:String
     },
      emailAddress: {
         type:String
     },
      location: {
         type:String
     },
      isAdmin: {
         type:Boolean
     }
    
 });
 var User = mongoose.model('User', userSchema);
 module.exports = User;

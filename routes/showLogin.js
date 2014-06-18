var User = require('../Models/User');

exports.getLogin = function(req, res) {
    User.findOne({
        firstName: req.param.firstName,
        passWord: req.param.passWord


    }, function(err, user) {
    	if(user){
        console.log(user)
        res.send('login');
        
    }
        else{
        	res.send('NotLogin');
        }

    });

}

var User = require('../Models/User');

exports.getLogin = function(req, res) {
    User.findOne({
        userName: req.param('userName'),
        passWord: req.param('passWord')


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

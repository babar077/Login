var User = require('../Models/User');
exports.addUser = function(req, res) {
    var data = new User({

        firstName: req.param.firstName,
        passWord: req.param.passWord,
        age: req.param.age,
        sex: req.param.sex,
        emailAddress: req.param.emailAddres,
        location: req.param.location,
        isAdmin: req.param.isAdmin
    });

    data.save(function(err, doc) {
        console.log(doc);
        res.send(data);
    });
}
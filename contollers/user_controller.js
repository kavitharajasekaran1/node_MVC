//the controllers handles all the logic behind validating request parameters,query,sending response withe correct codes
var UserService = require("../services/user_service")
exports.getUsers = async function(req,res,next){
    //validate request parameters, queries using express validator

    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var users = await UserService.getUsers({}, page, limit)
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }

}
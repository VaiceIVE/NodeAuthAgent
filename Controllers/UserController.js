const UserService = require('../Services/UserService');

class UserController
{
    async Register(req, res, next)
    {
        try
        {
            const {firstname, lastname, email, password} = req.body;

            const userData = await UserService.Register(firstname, lastname, email, password);
    
            res.json(userData)
        }
        catch(e)
        {
            console.log(e)
            next(e)
        }
        

    }

    async Login(req, res, next)
    {
        try {
            const {email, password} = req.body;

            const userData = await UserService.Login(email, password)

            res.json(userData)
            
        } catch (e) {
            console.log(e)
            next(e)
        }
    }

    async Refresh(req, res, next)
    {
        try {

            const {refreshToken} = req.body

            const userData = await UserService.Refresh(refreshToken)

            res.json(userData)
            
        } catch (e) {
            console.log(e)
            next(e)
        }
    }

    async Logout(req, res, next)
    {
        try {

            const {refreshToken} = req.body

            const userData = await UserService.Logout(refreshToken)

            res.json(userData)
            
        } catch (e) {
            console.log(e)
            next(e)
        }
    }
}

module.exports = new UserController()

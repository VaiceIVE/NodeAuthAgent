module.exports = class UserDTO
{
    email;
    id;
    username;

    constructor(model)
    {
        this.email = model.email;
        this.id = model._id;
        this.username = model.username;   
    }
}
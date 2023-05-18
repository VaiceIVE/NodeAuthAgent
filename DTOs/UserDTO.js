module.exports = class UserDTO
{
    email;
    id;
    firstname;
    lastname;

    constructor(model)
    {
        this.email = model.email;
        this.id = model._id;
        this.name = model.firstname;
        this.lastname = model.lastname;
    }
}
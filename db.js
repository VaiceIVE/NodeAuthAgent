const db = require('mongoose')

module.exports = async function() {
    await db.connect("mongodb://185.177.219.117:27017/LCT", {
        authSource: "admin",
        user: "self",
        pass: "admin",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
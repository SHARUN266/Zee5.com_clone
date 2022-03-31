const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect
    (
        "mongodb+srv://zeee5:zeee5123@cluster0.swvhj.mongodb.net/z?retryWrites=true&w=majority"
        )
}
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4, maxlength: 15 },
    email: { type: String, required: true, unique: true, maxlength: 15 },
    gender: { type: String, required: true },
    age : {type :Number, required: true,min:1,max:100},
    password: { type: String, required: true,Symbol:true},
    //  role: [{ type: String }],
},
    {
        timestamps: true,
        versionKey: false,
    }
)

userSchema.pre("save", function (next) {
    const hash = bcrypt.hashSync(this.password, 11);
    this.password = hash;
    return next();

})

userSchema.methods.checkPassword = function (password) {
    console.log("rohit")
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("user", userSchema)

module.exports = User;

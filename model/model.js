const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    shortURL: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitedHistory: [{timestamp:{type: Number}}]
},{timestamps: true});

const User = mongoose.model("user",userSchema);

module.exports = User;
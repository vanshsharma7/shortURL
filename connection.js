const mongoose = require("mongoose");

async function handleConnectToMongoDB(url){
    mongoose.connect(url).then(()=>{
        console.log("MongoDB connected");
    });
}

module.exports = {handleConnectToMongoDB};
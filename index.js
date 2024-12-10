const express = require("express");
const router = require("./routes/routes")
const {handleConnectToMongoDB} = require("./connection")
const URL = require("./model/model")
const app = express();
const PORT = 7007;

app.use(express.json());

handleConnectToMongoDB("mongodb://localhost:27017/URLShortner");
app.use("/url",router);
app.use("/:shortid",router);

app.listen(PORT,()=>{
    console.log(`Server Started at PORT: ${PORT}`); 
});

const express = require("express");
const {handleGenerateShortURL, handleRedirectingURL} = require("../controller/controller")
const router = express.Router();

router.post("/",handleGenerateShortURL);
router.get("/",handleRedirectingURL);

module.exports = router;
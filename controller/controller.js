const User = require("../model/model");
const shortId = require('shortid');

async function handleGenerateShortURL(req,res){
    const body = req.body;
    if(!body.name)
        return res.status(400).json({error: "URL is required!"})
    const shortid = shortId(8);
    await User.create({
        shortURL: shortid,
        redirectURL: body.name,
        visitedHistory: []
    });
    return res.json({id: shortid});
};

async function handleRedirectingURL(req,res){
    const shortid = req.params.shortid;
    const entry = await User.findOneAndUpdate(
        {
            shortid,
        },
        {
            $push:{
                visitedHistory:{
                    timestamp: Date.now(),
                },
            },
        }
    );
    if (!entry) {
        return res.status(404).json({ error: 'URL not found' });
    }
    res.redirect(entry.redirectURL);
}

module.exports = {
    handleGenerateShortURL,
    handleRedirectingURL
};

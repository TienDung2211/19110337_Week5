const posts = require('./../models/post')

function getAllPost (req, res) {
    if (posts) {
        res.render('home', {layout: 'main', listPost: posts, listExists: true});
    }
    else {
        console.log(0)
        res.status(400).json({error:'No post'});
    }
}

module.exports = {
    getAllPost
}
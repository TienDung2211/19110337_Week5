const posts = require('../models/post');

const detailController = {
    getPost: (req, res, next) => {
        const id = Number(req.params.id);

        const post = posts.find(data => {
            return data.id === id
        })

        if (post) {
            res.render('detail', {layout: 'main', detailPost: post, commentPost: post.comment});
        }
        else {
            return res.json({error: 'Not Valid'})
        }
    },
    addComment: (req, res, next) => {
        const id = Number(req.params.id);
        const content = req.body.value;

        const post = posts.find(data => {
            return data.id === id
        })

        if (post) {
            post.comment.push({
                auth: 'Guest',
                content: content,
            })
            res.render('detail', {layout: 'main', detailPost: post, commentPost: post.comment});
        }
        else {
            return res.json({error: 'Not Valid'})
        }
    },
}

module.exports = detailController;
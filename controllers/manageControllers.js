var posts = require('../models/post');

const manageController = {
    getAllPost: (req, res, next) => {
        if (posts) {
            res.render('manage', {layout: 'main', listPost: posts});
        }
        else {
            res.status(400).json({error:'No post'});
        }
    },

    fillForm: (req, res, next) => {
        const id = Number(req.params.id);

        const post = posts.find(data => {
            return data.id === id
        })

        if (post) {
            res.render('manage', {layout: 'main', detailPost: post, listPost: posts});
        }
        else {
            return res.json({error: 'Not Valid'})
        }
    },
    controlPost: (req, res) => {
        if (req.body.action === 'add'){
            const id = +req.body.id;

            const post = posts.find(data => {
                return data.id === id
            })

            if (post) {
                return res.send('ID Exist')
            } else {
                posts.push({
                    id: id,
                    title: req.body.title,
                    image: req.body.image,
                    description: req.body.desc,
                    content: req.body.content,
                    comment: []
                })

                res.render('manage', {layout: 'main', listPost: posts});
            }

        } else if (req.body.action === 'update'){
            const id = +req.body.id;

            const post = posts.find(data => {
                return data.id === id;
            })

            if (!post) {
                return res.send('ID Not Exist')
            } else {
                const index = posts.findIndex(data => {
                    return data.id === id
                })

                posts[index].title = req.body.title;
                posts[index].image = req.body.image;
                posts[index].description = req.body.desc;
                posts[index].content = req.body.content;

                res.render('manage', {layout: 'main', listPost: posts});
            }

        } else if (req.body.action === 'remove'){
            const id = +req.body.id;

            const post = posts.find(data => {
                return data.id === id;
            })

            if (!post) {
                return res.send('ID Not Exist')
            } else {
                const index = posts.findIndex(data => {
                    return data.id === id
                })

                posts.splice(index , 1)

                res.render('manage', {layout: 'main', listPost: posts});
            }
        }
    },
}

module.exports = manageController;
const models = require('../models');

module.exports = {
    get: {
        getAll: (req, res, next) => {
            models.Posts.find().sort({_id: -1})
                .populate('author')
                .then((posts) => res.send(posts))
                .catch(next);
        },

        getOne: (req, res, next) => {
            const id = req.params.id;

            models.Posts.findById(id)
                .populate('author')
                .then((posts) => res.send(posts))
                .catch(next);
        },
    },

    post: (req, res, next) => {
        const { title, description, content } = req.body;
        const { _id } = req.user;

        models.Posts.create({ title, description, content, author: _id })
            .then((createdPost) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdPost } }),
                    models.Posts.findOne({ _id: createdPost._id })
                ]);
            })
            .then(([modifiedObj, postObj]) => {
                res.send(postObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { title, description, content } = req.body;
        models.Posts.updateOne({ _id: id }, { title, description, content })
            .then((updatedPost) => res.send(updatedPost))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        const { _id } = req.user;
        models.Posts.deleteOne({ _id: id }).then(res =>{
           return models.User.updateOne({ _id }, { $pull: { posts: id } })
        })
            .then((removedPost) => res.send(removedPost))
            .catch(next)
    }
};
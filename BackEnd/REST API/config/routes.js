const router = require('../routes/');
const utils = require('../utils');
const config = require('../config/config');
const models = require('../models');

module.exports = (app) => {

    app.get('/auth', (req, res) => {
        const token = req.cookies[config.authCookieName];
        utils.jwt.verifyToken(token)
            .then(({ id }) => models.User.findById(id))
            .then(user => res.send(user))
            .catch(() => res.status(401).send('An error occurred!'));
    });

    app.use('/api/user', router.user);

    app.use('/api/posts', router.post);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. </h1>'))
};
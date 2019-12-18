const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.post.get.getAll);

router.get('/:id', controllers.post.get.getOne);

router.post('/', auth(), controllers.post.post);

router.put('/:id', auth(), controllers.post.put);

router.delete('/:id', auth(), controllers.post.delete);

module.exports = router;
const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

//rotas tabela cliente 
router.get('/posts', async function (req, res) {
    const posts = await postsService.getPosts();
    res.json(posts);
});
router.get('/posts/:articleid', async function (req, res) {
    const posts = await postsService.getPost(req.params.articleid);
    res.json(posts);
});

router.get('/titles/:title', async function (req, res) {
    const titles = await postsService.getTitles(req.params.title);
    res.json(titles);
});

router.post('/posts', async function (req, res) {
    const post = req.body;
    const newPost = await postsService.savePost(post);
    res.json(newPost);
});
router.put('/posts/:articleid', async function (req, res) {
    const post = req.body;
    await postsService.updatePost(req.params.articleid, post);
    res.end();
});

//fim 



module.exports = router;
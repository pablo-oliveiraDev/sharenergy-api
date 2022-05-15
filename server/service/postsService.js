const postsData = require('../data/postsData');

//services referente a tabela cliente


exports.getPosts = function () {
    return postsData.getPosts();
};
exports.getPost = function (articleid) {
    return postsData.getPost(articleid);
};

exports.getTitles = function (title) {
    return postsData.getTitles(title);
};

exports.savePost = function (post) {
    return postsData.savePost(post);
};

exports.updatePost = function (articleid, post) {
    return postsData.updatePost(articleid, post);
};
//-----------------------fim---------------------




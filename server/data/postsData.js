
const database = require('../infra/database');

//postsData referente a tabela cliente


exports.getPosts = function () {
    return database.query('SELECT * FROM articles');
};

exports.getPost = function (articleid) {
    return database.query('select * from articles where articleid=$1 ', [articleid]);

}

exports.getTitles = function (title) {
    return database.query("select * from articles where title LIKE '%$1%'", [title]);
}

exports.savePost = function (post) {
    return database.one('insert into articles ( id, title, url, "imageUrl", "newsSite", summary, "publishedAt", "updatedAt", featured, launches, events) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning * ', [ post.id, post.title, post.url, post.imageUrl, post.newsSite, post.summary, post.publishedAt, post.updatedAt, post.featured, post.launches, post.events]);
};

exports.updatePost = function (articleid, post) {
    return database.none('update articles SET id=$1, title=$2, url=$3, "imageUrl"=$4, "newsSite"=$5, summary=$6, "publishedAt"=$7, "updatedAt"=$8, featured=$9, launches=$10, events=$11 where articleid=$12', [ post.id, post.title, post.url, post.imageUrl, post.newsSite, post.summary, post.publishedAt, post.updatedAt, post.featured, post.launches, post.events,articleid]);
};

//------------------fim --------------------------


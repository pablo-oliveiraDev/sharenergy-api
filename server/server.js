const express = require('express');
const app = express();
const cors = require('cors');



app.use(express.json());
app.use(cors());

app.use('/', require('./route/postsRoute'));

app.listen(5080, () => {
    console.log('api node rodando http://localhost:5080')
});
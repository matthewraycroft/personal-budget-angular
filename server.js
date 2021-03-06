const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.get('/hello', (req, res) =>{
    res.send('Hello World!');
});


app.get(`/budget`, (req, res) =>{
    var json = require('./source.json')
    res.json(json.myBudget);
});

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
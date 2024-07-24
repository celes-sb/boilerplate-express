let express = require('express');
let app = express();

//console.log("Hello World");

/*
app.get('/', (req, res) => {
    res.send('Hello Express');
});
*/

app.get('/', (req, res) => {
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath)
})

app.use('/public', express.static(__dirname + '/public'));

app.get('/public', (req, res) => {
    let absolutePath = __dirname + '/public';
    res.sendFile(absolutePath)
})












 module.exports = app;

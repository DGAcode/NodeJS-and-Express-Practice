var express = require('express');

var app = express();

var port = process.env.PORT || 10000;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {title: 'Render to earth', list: ['a','b']});
});

app.get('/new', function (req, res) {
    res.send('New Tab');
});
app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
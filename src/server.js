var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 5000));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.get('/hello', function(req, res) {
    res.send(JSON.stringify({
        test: true
    }));
});

app.listen(app.get('port'));

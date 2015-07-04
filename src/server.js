var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ dest: './uploads/'}));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates', 'landing.html'));
});

app.get('/app', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.post('/submit-paper', function(req, res){
    res.send(JSON.stringify(req.files));
});

app.get('/hello', function(req, res) {
    res.send(JSON.stringify({
        test: true
    }));
});

app.listen(app.get('port'));

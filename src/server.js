var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var request = require('request');
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
    var filePath = req.files.paper.path;

    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw err;
        request.post({
            url:'http://expresso-app.org/analyze-text',
            form: {
                html: data
            }
        }, function(err, response, body){
            if (!err && response.statusCode == 200) {
              res.send(body);
            }
        });
    });
});

app.get('/hello', function(req, res) {
    res.send(JSON.stringify({
        test: true
    }));
});

app.listen(app.get('port'));

// import modules
var express = require('express'), // npm install express
    app = express();

app.get('/index', function(req, res) {
    console.log("hello");
});
app.get('/test', function(req, res) {
    console.log("hello");
});
app.get('/ttttt', function(req, res) {
    console.log("hello");
});



var port = process.env.PORT || 4000;

app.listen(port, function() {
    console.log("Express server listening on port %d", port);
});

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/html/'));

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});
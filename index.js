var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var os = require('os');
var app = express();

// Nunjucks Integration and Configuration
nunjucks.configure('./views', {
    autoescape: true,
    express: app
});

// Routes File Connection
var routes = require("./routes")(app);

// Assets Path
app.use(express.static(path.join(__dirname, '/assets')));

// Server Connection
var port = 3000;
app.listen(port, function () {
    var interfaces = os.networkInterfaces();
    var hostname = interfaces['Ethernet'][1].address;
    console.log('English Teacher Online Running on http://' + hostname + ':' + port );
});

//===========================================================================
//                               MODULES
//===========================================================================

//Express 4.0
var express         = require('express');
var expressLogger   = require('morgan');            // logs every request to the console
var bodyParser      = require('body-parser');       // body-parser
var compression     = require('compression');       // compress all requests
var cookieParser    = require('cookie-parser');
var favicon         = require('serve-favicon');     // Express handles favicon efficiently & discreetly
var methodOverride  = require('method-override');
var session         = require('express-session');
var app             = express();

//Node v0.12.0
var fs              = require('fs');
var https           = require('https'), http = require('http');

//Server Side Controllers
var v100ConfigCtrl = require('./private/controller/configCtrl');

//===========================================================================
//                               CONFIGURATION
//===========================================================================

//Express 4.0
app.use(bodyParser.json());                         // parse application/json
app.use(bodyParser.urlencoded({extended: true}));   // parse application/x-www-form-urlencoded
app.use(cookieParser());                           // read cookies
app.use(compression());                             // compress all requests
app.use(favicon(__dirname + '/public/lib/img/favicon.ico')); //favicon
app.use(methodOverride('X-HTTP-Method-Override'));  // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
if (process.env.LOCAL == "true") { app.use(expressLogger('dev')); } //If local, log requests to the console


var handlers = {
    v100Config: new v100ConfigCtrl(),
};

//===========================================================================
//                               ROUTES
//===========================================================================

var routes = require('./routes');

routes.setup(app, handlers, express);

//===========================================================================
//                               START APP
//===========================================================================

var port = process.env.PORT || 80;
//var ssl_port = process.env.SSL_PORT || 443;
if (process.env.LOCAL.toLowerCase() == "true"){
    // var server_options = {
    //   key: fs.readFileSync('ssl/key.pem'),
    //   cert: fs.readFileSync('ssl/cert.pem')
    // };

    //SSL cert
    // https.createServer(server_options,app).listen(ssl_port, function () {
    //     console.log("Listening on https port " + ssl_port);
    // });
    app.listen(port, function () {
        console.log("Listening on http " + port);
    });
} else {
    app.listen(port, function () {
        console.log("Listening on " + port);
    });
}
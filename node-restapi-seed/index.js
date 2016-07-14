var restify = require('restify');
var morgan  = require('morgan');

var app = restify.createServer({
  name: 'restapi-seed',
  version: '1.0.0'
});
app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());
app.use(restify.bodyParser());
app.use(morgan('combined'));


app.listen(5000, function () {
  console.log('%s listening at %s', app.name, app.url);
});


routes = require('./routes/routes.js')(app);


var  route = function(app){

  app.get('/', function (req, res, next) {
    res.send('Welcome to REST-API');
    return next();
  });

}

module.exports = route;

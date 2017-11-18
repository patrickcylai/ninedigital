var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/filterShowsRoutes');
routes(app);

app.use(function(err, req, res, next) {
    // Error Handling
    if (err instanceof SyntaxError) {
    res.status(400).send({ 'error' : 'Could not decode request: JSON parsing failed'});
    } else {
    next();
    }
});

module.exports = app.listen(port);

console.log('Nine Digital API server started on: ' + port);

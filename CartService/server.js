var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  
  var routes = require('./api/routes/cartRoutes');
  routes(app);

  app.listen(port);


  console.log('cart server is running on : '+port);
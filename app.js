var express = require('express');
var exp = express();
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
exp.get('/', function (req, res) {
  res.send('Ex: node express');
});

exp.listen(8080, ip);
 

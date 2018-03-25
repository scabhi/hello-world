var express = require('express');
var exp = express();
var ip = process.env.OS_IP || '0.0.0.0';
exp.get('/', function (req, res) {
  res.send('Node express test');
});

exp.listen(8080, ip);
 

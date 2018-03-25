var express = require('express');
var exp = express();
exp.get('/', function (req, res) {
  res.send('Ex: node express');
});
exp.listen(8888, function () {
  console.log('listening on port 8888');
});
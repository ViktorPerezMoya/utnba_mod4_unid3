var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Hola mundo!');
});

router.get('/ruta1', function(req, res) {
  res.send('Esta es una ruta');
});

router.get('/ruta2', function(req, res){
    res.status(200).json({status: "ok",message: "Esta es otra ruta y devuelve un json"});
})

module.exports = router;
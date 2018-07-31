var express = require('express');
var rotas = express.Router();
/*arquivo com as funcoes da rota*/
var controller = require('./controller');

/*Rotas*/

/*get all*/
rotas.get('/all/:page?/:text?', controller.index);

/*get by id*/
rotas.get('/:id', controller.get);

/*save one*/
rotas.post('/', controller.new);

/*Edit one */
rotas.put('/', controller.edit);

/*Delete one */
rotas.delete('/:id', controller.delete);

/*Export*/
module.exports = rotas;

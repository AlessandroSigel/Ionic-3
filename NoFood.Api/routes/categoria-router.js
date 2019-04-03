'use strict'

/**
 * 
 *      CATEGORIA DE ROTAS
 */

const express = require('express'); //importand o 'express' com o nome de express para poder usar aqui
const router = express.Router(); //impotando o router
const controller = require('../controllers/categoria-controller'); //impotando a classe 'categoria-controller

let _ctrl = new controller();

router.get('/', _ctrl.get);
router.get('/:id', _ctrl.getById);
router.post('/', _ctrl.post);
router.put('/:id', _ctrl.put);
router.delete('/:id', _ctrl.delete);

module.exports = router;//exportando o router para dar acesso para outras classes
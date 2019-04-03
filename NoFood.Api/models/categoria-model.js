'use strict'

const mongoose = require('mongoose');//importando o mongoose
const schema = mongoose.Schema;//utilizando o Schema do mongoose

const categoriaModel = new schema({ // criando uma categoria de modelo
    /**
     * DEFININDO OS CAMPOS DA CATEGORIA 
     */
    titulo: {trim: true, index: true, require: true, type: String},
    descricao: {type: String},
    foto: {type: String, require: true},
    ativa: {type: Boolean, require: true},
    dataCriacao: {type: Date, default: Date.now}
}, {versionKey: false});

categoriaModel.pre('save', next => {
    let agora = new Date();
    if(!this.dataCriacao)
    this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Categoria', categoriaModel);
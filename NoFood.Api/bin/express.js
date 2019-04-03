const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //importando o mongoose 
const variables = require('../bin/configuration/varibles');//importando a classe variables


//ROUTERS
const categoriaRouter =  require('../routes/categoria-router');
const produtoRouter =  require('../routes/produto-router');

//criando/invocando a Api do express
const app = express();


//configuracao de parser de json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//CONFIGURANDO A CONEXÃO COM O BANCO DE DADOS
mongoose.connect(variables.Database.connection);

//CONFIGURANDO AS ROTAS para acessar basta digitar a porta e depois as rotas
app.use('/api/categoria', categoriaRouter); //apartir da rota /api/categoria ele colocou todas as sub Rotas de categoriaRouter 
app.use('/api/produto', produtoRouter ); 

//exportando nossa Api
module.exports = app;

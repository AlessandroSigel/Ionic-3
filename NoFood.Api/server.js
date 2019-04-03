'use strict' //sempre inicia-se com 'use strict'
const app = require('../NoFood.Api/bin/express'); //importando o app
const variables = require('../NoFood.Api/bin/configuration/varibles');//importando variables



app.listen(variables.Api.port,  () => { 
    console.info(`Api inicializada com susseco na porta: ${variables.Api.port}`); //aqui ele irá mostrar a porta que o servidor irá iniciar
});
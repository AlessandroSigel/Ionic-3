const variables = { //criando um objeto Api
    Api: {
        port: process.env.port || 3000 //toda a vez que executa o processo ele vai pedir a porta e se não tiver ele entra na 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://nofoodadmin:mk5lox12@cluster0-tffza.mongodb.net/nofood?retryWrites=true'  //se tiver uma configuração pré definida ele irá pegar, se não irá pega o outro
    }
}

module.exports = variables; //exportando/dando acesso à variabless
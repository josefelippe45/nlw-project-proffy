//knex permite escrever scrips sql com javascript
import knex from 'knex';

//migrations controlam a versão do banco de dados

//auxilia nos caminhos entre a aplicação
import path from 'path';
const db = knex({
    client: 'sqlite3',
    connection:{
        //__dirname se refere ao diretório onde o arquivo é executado
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    //por padrão deixa os campos com valor null
    useNullAsDefault: true
});

export default db;
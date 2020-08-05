//primeiro arquivo a ser executado. define as rotas
import express from 'express';
import routes from './routes';
import cors from 'cors';
//contem as funcionalidades do express
const app = express();
//usando um middlewares que são executado antes dos requests
app.use(cors());
app.use(express.json());
app.use(routes)
//o env é o environment ou ambiente e ele ajuda identificar a porta.
const port = process.env.PORT || 8080;
//listener, reponsavél por ouvir requisições http
app.listen(port);
console.log(`Listening on port ${port}`);

/*tipos de params:
 Corpo (req.body): dados para criação ou atualização de um regitsro. (post e put);
 route-params: identifica recursos para deletar ou atualizar. 'ex: /users/:id'
 query-params: auxilia na listagem, paginação, filtros, ordenação e etc.
*/
//rotas. recebe uma função callback com o request e response
//http:localhost:port/users
app.get('/', (req, res) => {
    return (res.json({ message: 'Hello World' }))
});

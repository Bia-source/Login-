import Application from './listen/listen';
import connection from './connection/database';

//fazendo conexão com o banco
connection();

// Acessando porta 
const app = new Application();
app.listen();
const express =  require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const requireDir = require ('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

//conexão com o banco de dados pelo mongoose teve um acréscimo de parâmetros
// link: https://github.com/Automattic/mongoose/issues/6667

mongoose.connect('mongodb://localhost:27017/nodeapi', 
{useNewUrlParser: true})
.then(() => console.log('conectado'))
.catch(err => console.erro('Ocorreu algum erro', err))

requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

//porta
app.listen(3001);


const express = require('express');

const server = express();

server.use(express.json());
/*
Query Params = ?nome=Rodrigo&idade=32
Route Params = /curso
Request Body = { nome: 'Rodrigo', cargo: 'Front-End'}
*/

/*
CRUD = Create, Read, Update, Delete
*/
const cursos = ['Node JS', 'JavaScript', 'React Native'];

// MIDDLEWARE GLOBAL
server.use( (req,res, next) =>{
    console.log(`URL chamda: ${req.url}`);
    return next();
})
// MIDDLEWARE checkcurso
function checkCurso(req, res, next){
    if(!req.body.name){
        return res.status(400).json({error: "Nome do curso é obrigatório!"})
    }
    return next();
}
// MIDDLEWARE checkIndexCurso
function checkIndexCurso(req, res, next){
    const curso = cursos[req.params.index]
    if(!curso){
        return res.status(400).json({error: "Curso não encontrado!"})
    }
    req.curso = curso;
    return next();
}

// LISTAR TODOS
server.get('/cursos', (req, res) => {
    return res.json(cursos);
  });

//BUSCA POR INDEX/ID
server.get('/cursos/:index', checkIndexCurso, (req, res) => {
    //const { index } = req.params;
    return res.json(req.curso)
});

//Criando um novo curso
server.post('/cursos', checkCurso, (req, res)  => {
    const { name } = req.body;
    cursos.push( name );
  
    return res.json(cursos);
});

//Atualizando um curso
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) => {
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

//Deletando um curso
server.delete('/cursos/:index', checkIndexCurso, (req, res) => {
    const {index} = req.params;

    cursos.splice(index, 1);
    return res.send();
    //return res.json(cursos);
})

server.listen(3000);
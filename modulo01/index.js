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

server.get('/cursos', (req, res)=> {
    return res.json(cursos);
});

server.get('/cursos/:index', (req, res) => {
/*
    return res.send('Hello World!');
    const nome = req.query.nome;
    const cargo = req.query.cargo;
    const id = req.params.id;
*/
    const { index } = req.params;
    return res.json(cursos[index])
    //return res.json({curso: `Curso de Node js ID: ${id}. Aluno: ${nome} Cargo: ${cargo}`})
})

//Criando um novo curso
server.post('/cursos', (req, res)=> {
    const { name } = req.body;
    cursos.push(name);
  
    return res.json(cursos);
});

//Atualizando um curso
server.put('/cursos/:index', (req,res) => {
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

//Deletando um curso
server.delete('/cursos/:index', (req,res) => {
    const {index} = req.params;

    cursos.splice(index,1);
    return res.json(cursos);
})

server.listen(3000);
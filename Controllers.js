const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const models= require('./models');

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

let user=models.User;
let reunioes=models.Reunioes

// fetch manda para o backend porta 3000 a parte do email e senha ('http://192.168.15.149:3000/login',)
app.post('/login',async (req,res)=>
{  
     let response = await user.findOne(
    {
        where:{email:req.body.email,password:req.body.password}
    })
    if (response === null){
        res.send(JSON.stringify('error'))
    }
    else {
        res.send(response)
    }
})

app.get('/reuniao',async (req,res)=>
{
    let response = await reunioes.findAll({
    })
    res.send(response)

})

app.post('/newuser', async(req,res)=>{
    //console.log(req.body)
    let response = await user.findOne({
        where:{email:req.body.email}
    })
    if (response === null){
        let create = await user.create({
            name : req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            password: req.body.password,
            condominio: req.body.condominio,
            createdAt: new Date(),
            updatedAt: new Date()     
        })
        res.send(JSON.stringify('accept'))
    }
    else{
        res.send(JSON.stringify('reject'))
    }

//    let response = await user.findOne({
//        where:{}
//    })
})

app.post('/cadasreuniao', async(req,res) => {
    let response = await reunioes.findOne({
        where:{datareuniao:req.body.datareuniao,
               hora:req.body.hora}
    })
    if(response === null){
        let create = await reunioes.create({
            userId: req.body.userId,
            nome: req.body.nome,
            assunto: req.body.assunto,
            datareuniao: req.body.datareuniao,
            hora: req.body.hora,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        res.send(JSON.stringify('accept'))
    }
    else{
        res.send(JSON.stringify('reject'))
    }


})

 

//let condominio = models.Condominios
//let reunioes = models.Reunioes

//app.get('/create',async (req,res)=>{
    //res.send('Meu servidor backend!!')
//    let create=await user.create({
//        nome:'Alonso',
//        sobrenome:'Karlos',
//        email:'ak@hotmail.com',
//        password:'123',
//        condominio:'Athenas',
//        createdAt: new Date(),
//        updateAt: new Date()
//    })
//    res.send('Usuario criado com sucesso')
//})

//app.get('/read',async (req,res)=>{
//    let cre
//})

let port = process.env.PORT || 3000
// req = requisição , res = resposta
app.listen(port,(req,res)=>{
    console.log('Servidor online!')
})
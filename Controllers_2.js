const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models/index')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

let user =  models.User
let condominio = models.Condominios
let reunioes = models.Reunioes

app.get('/create',async (req,res)=>{
    //res.send('Meu servidor backend!!')
    let create = await user.create({
        nome:'Alonso',
        sobrenome:'Karlos',
        email:'ak@hotmail.com',
        password:'123',
        condominio:'Athenas',
        createdAt: new Date(),
        updateAt: new Date()
    })
    res.send('Usuario criado com sucesso')

})

let port = process.env.PORT || 3000
// req = requisição , res = resposta
app.listen(port,(req,res)=>{
    console.log('Servidor online!')
})
const express= require('express')
const app=express()

const path=require('path')

app.listen (3030, ()=>{
    console.log('Servidor corriendo')
})

app.get ('/', function (req, res){
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.use(express.static('public'))
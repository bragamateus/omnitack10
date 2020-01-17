const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack10:omnistack10@cluster0-9e9av.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração ou remeção)
// Body: request.body (Dados para criação ou alteração de um registro)


app.listen(3333)
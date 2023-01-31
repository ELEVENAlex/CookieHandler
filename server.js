const cookieParser = require('cookie-parser')
const express = require('express')

const app = express()

app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Pagina principal de manejo de cookies')
})

app.get('/setcookie', (req, res) => {
    res.cookie('moto', 'mami')

    res.send('Pagina principal de manejo de cookies')
})


app.listen(3000)
console.log('Server en el puerto 3000')
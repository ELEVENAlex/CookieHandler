const cookieParser = require('cookie-parser')
const express = require('express')

const app = express()

app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Pagina principal de manejo de cookies')
})

app.get('/setcookie', (req, res) => {
    res.cookie('moto', 'mami', {
        maxAge: 7000,
        //expires: new Date('2023-12-31'),
        httpOnly: true,
        secure: true,
        sameSite: 'lax'
        
    })

    res.send('Pagina principal de manejo de cookies')
})

app.get('/getcookie', (req, res) => {
    console.log(req.cookies)
    res.send('Reading cookies...')
})

app.get('/deletecookie', (req, res) => {
    console.log(req.cookies)
    res.clearCookie()
    res.send('Deleting cookies...')
})

app.listen(3000)
console.log('Server en el puerto 3000')
const express = require('express')
const app = express()
const path = require('path')
const rutas = require('./routes/index')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, './views'))
app.set('views engine', 'ejs')
app.use('/', rutas)
app.listen(8080, err => {
    if (err) {
        console.log(`Error al iniciar el servidor ${err}`)
    } else {
        console.log(`Servidor escuchando el puerto 8080`)
    }
})
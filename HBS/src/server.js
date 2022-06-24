const express = require('express')
const app = express()
const path = require('path')
const rutas = require('./routes/index')
const { engine } = require('express-handlebars')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: path.join(__dirname, './views/layout/main'),
    partialsDir: path.join(__dirname, './views/partials/')
}))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'hbs')
app.use('/', rutas)
app.listen(8080, err => {
    if (err) {
        console.log(`Error al inicar le servidor ${err}`)
    } else {
        console.log(`Servidor escuchando el puerto ${8080}`)
    }
})
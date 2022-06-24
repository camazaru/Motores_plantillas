const productos = []
const getFormulario = (req, res) => {
    try {
        res.render('main.ejs', {})
    } catch (e) {
        console.log('Error:', e)
        res.sendStatus(500)
    }
}
const getProductos = (req, res) => {
    try {
        res.render('main.ejs', { productos })

    } catch (e) {
        console.log('Error:', e)
        res.sendStatus(500)
    }
}
const addProductos = (req, res) => {
    try {
        productos.push(req.body)
        res.redirect('/')
    } catch (e) {
        console.log('Error:', e)
        res.sendStatus(500)
    }
}
module.exports = {
    getFormulario,
    getProductos,
    addProductos
}
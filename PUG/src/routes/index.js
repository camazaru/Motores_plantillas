const { Router } = require('express')
const router = Router()
const { getFormulario, getProductos, addProductos } = require('../controllers/productosController')
router.get('/', getFormulario)
router.get('/productos', getProductos)
router.post('/productos', addProductos)
module.exports = router
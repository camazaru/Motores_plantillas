const routeController = (req, res) => {
    try {
        res.render('main.ejs', { titulo: '<h1>Titulo1 var</h1>', tituloDos: '<h1>Titulo2 var</h1>', render: true })
    } catch (e) {
        console.log('Error:', e)
        res.sendStatus(500)
    }
}
const routeControllerMeter = (req, res) => {
    try {
        const datosMeter = req.query
        res.render('mainmeter.ejs', datosMeter)
    } catch (e) {
        console.log('Error:', e)
        res.sendStatus(500)
    }
}
module.exports = {
    routeController,
    routeControllerMeter
}
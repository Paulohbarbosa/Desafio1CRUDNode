console.log('Server Start...')
const express = require('express')
const app = express()
app.listen(3000, function () {
    console.log('servidor rodando na porta 3000')
})
app.get('/', function (req, res) { res.render('index.ejs'); });
app.set('view engine', 'ejs')

//erro de redenização ponto 
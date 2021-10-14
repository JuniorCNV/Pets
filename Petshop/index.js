const express = require("express");
const app = express();

const petsRouter = require('./routes/pets')
const servicosRouter = require("./routes/servicos")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/pets', petsRouter)
app.use('/servicos', servicosRouter)

app.get('/', (req, res) => {
    return res.render('index')
})

app.listen(3000, () => {
    console.log("servidor rodando");
});
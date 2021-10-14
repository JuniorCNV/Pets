const { v4: uuid } = require('uuid')

const servicos = [
    { id: uuid(), nome: "banho", valor: 40 },
    { id: uuid(), nome: "tosa", valor: 50 },
    { id: uuid(), nome: "pedicure", valor: 10 },
    { id: uuid(), nome: "denticure", valor: 130 },
    { id: uuid(), nome: "clinica", valor: 150 },
]

const servicosController = {
    index: (req, res) => {
        return res.render('servicos/lista');
    },
    store: (req, res) => {
        return res.render('servico/cadastro');
    },
    save: (req, res) => {
        const { nome, valor } = req.body
        servicos.push({ id: uuid(), nome, valor })
        return res.redirect('servicos')
    },

    edit: (req, res) => {
        const { id } = req.parmas
        const index = servicos.findIndex(servicos => servicos.id == id)

        return res.render('servicos/edit', { servicos })
    }
};

module.exports = servicosController;
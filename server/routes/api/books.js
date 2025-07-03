const express = require('express');

const router = express.Router();

const Book = require ("../../models/Book");

router.get('/test', (req, res) => res.send('Testando rota Book'));

router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({nobooksfound: 'Nenhum livro encontrado'}))
});

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({nobooksfound: 'Nenhum livro encontrado'}))
});

router.post('/', (req, res) => {
    Book.create(req.body)
    .then(book => res.json({msg: 'Livro adicionado com sucesso'}))
    .catch(err => res.status(400).json({error: 'Não foi possível adicionar esse livro'}))
});

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({msg: 'Atualizado com sucesso'}))
    .catch(err => res.status(400).json({error: 'Não foi possível atualizar a base de dados'}))
});

router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, req.body)
    .then(book => res.json({msg: 'Livro deletado com sucesso'}))
    .catch(err => res.status(400).json({error: 'Não existe esse livro'}))
});

module.exports = router;
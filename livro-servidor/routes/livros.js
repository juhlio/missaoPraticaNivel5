const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelos/livro-dao');

router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    const livro = req.body;
    try {
        await incluir(livro);
        res.status(201).json({ mensagem: 'Livro adicionado com sucesso.' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao adicionar livro.' });
    }
});

router.delete('/:_id', async (req, res) => {
    const codigo = req.params._id;
    try {
        await excluir(codigo);
        res.status(200).json({ mensagem: 'Livro excluído com sucesso.' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao excluir livro.' });
    }
});

module.exports = router;
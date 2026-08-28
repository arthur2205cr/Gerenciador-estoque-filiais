import bd from '../../bd.js';

export default function cadastrarProduto(req, res) {
    const { nome, marca, tipo, descricao, valor, data_recebimento } = req.body;

    if ( !nome || !marca || !tipo || !descricao || valor == null || !data_recebimento)
        return res.status(400).json({msg_erro: 'Todos os campos são obrigatórios'});

    const query = 'INSERT INTO produto (nome, marca, tipo, descricao, valor, data_recebimento) VALUES (?, ?, ?, ?, ?, ?)';

    bd.query(query, [nome, marca, tipo, descricao, valor, data_recebimento], (erro, resultado) => {
        if (erro)
            return res.status(500).json({ msg_erro: erro.message });

        res.status(201).json({ id: resultado.insertId, nome, marca, tipo, descricao, valor, data_recebimento });
    });
}
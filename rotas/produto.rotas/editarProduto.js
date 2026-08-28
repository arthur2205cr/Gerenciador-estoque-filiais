import bd from "../../bd.js";

export default function editarProduto(req, res) {
    const { id } = req.params;

    const { nome, marca, tipo, descricao, valor,  data_recebimento } = req.body;

    if ( !nome || !marca || !tipo || valor == null || !data_recebimento)
        return res.status(400).json({msg_erro: "Todos os campos são obrigatórios para atualização!"});

    const query = 'UPDATE produto SET nome = ?, marca = ?, tipo = ?, descricao = ?, valor = ?,  data_recebimento = ?';

    bd.query(query, [nome, marca, tipo, descricao, valor,  data_recebimento], (erro, resultado) => {
        if (erro)
            return res.status(500).json({ msg_erro: erro.message});

        if (resultado.affectedRows === 0)
            return res.status(404).json({mensagem: 'Produto não encontrado'});

        res.json({ mensagem: 'Produto editado com sucesso', nome, marca, tipo, descricao, valor,  data_recebimento});
    });

}
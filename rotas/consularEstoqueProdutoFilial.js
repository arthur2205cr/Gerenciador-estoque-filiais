import bd from "../bd.js";

export default function consultarEstoqueProdutoFilial(req, res) {
    const { id_produto, id_filial } = req.params;

    if (!id_produto || !id_filial ) 
    return res.status(400).json({ msg_erro: 'Todos os campos são obrigatórios!' });


    const query = 'SELECT quantidade FROM estoque WHERE id_produto = ? AND id_filial = ?';
    
    bd.query(query, [id], (erro, resultado) => {
        if (erro)
            return res.status(500).json({ msg_erro: erro.message});

        if (resultado.length === 0)
            return res.status(404).json({ msg_erro: `Nenhum produto encontrado no ID ${id}.` });

        return res.json(resultado[0]);
    });
}
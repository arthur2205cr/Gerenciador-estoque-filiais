import bd from "../../bd";

export default function buscarFornecedorPorId(req, res) {
    const { id } = req.params;

    const query = 'SELECT id_ id_fornecedor, nome, marca, tipo, descrição'

    bd.query(query, [id], (erro, resultado) => {
        if (erro)
            return res.status(500).json({ msg_erro: erro.message});

        if (resultado.length === 0)
            return res.status(404).json({ msg_erro: `Nenhum fornecedor encontrado com o ID ${id}. `});

        return res.json(resultado[0]);
    });
}
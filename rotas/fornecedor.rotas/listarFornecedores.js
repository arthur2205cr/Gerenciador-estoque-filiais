import bd from "../../bd";

export default function listarFornecedores(req, res) {
    bd.query('SELECT * FROM fornecedor', (erro, resultado) => {
        if (erro)
            return res.status(500).json({ msg_erro: erro.message});

        res.json(resultado);
    });
}
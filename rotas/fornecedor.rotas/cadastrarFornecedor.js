import bd from '../../bd.js';

export default function cadastrarFornecedor(req, res) {
    const { 
        nome, 
        cnpj, 
        telefone, 
        email, 
        endereco 
    } = req.body;

    if ( !nome || !cnpj || !telefone || !email || !endereco )
        return res.status(400).json({msg_erro: 'Todos os campos são obrigatórios'});

    const query = 'INSERT INTO fornecedor (nome, cnpj, telefone, email, endereco) VALUES (?, ?, ?, ?, ?, ?)';

    bd.query(query, [nome, cnpj, telefone, email, endereco], (erro, resultado) => {
        if (erro)
            return res.status(500).json({ msg_erro: erro.message });

        res.status(201).json({ id: resultado.insertId, nome, cnpj, telefone, email, endereco });
    });
}
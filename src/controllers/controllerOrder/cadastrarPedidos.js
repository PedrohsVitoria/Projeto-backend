const knex = require('../../database/conexao')

const cadastrarPedido = async (req, res) => {
    const { cliente_id, observacao, pedido_produtos } = req.body
    try {
        const clienteExistente = await knex('clientes')
            .where({ id: cliente_id })
            .first();
        if (!clienteExistente) {
            return res.status(400).json({ mensagem: 'Cliente não encontrado.' });
        }


        for (const pedidoProduto of pedido_produtos) {
            const { produto_id, quantidade_produto } = pedidoProduto;


            const produto = await knex('produtos')
                .where({ id: produto_id })
                .first();


            if (!produto) {
                return res.status(400).json({ mensagem: 'Produto não encontrado.' });
            }

            if (produto.quantidade_estoque < quantidade_produto) {
                return res.status(400).json({ mensagem: 'Estoque insuficiente para o produtoinformado.' });
            }
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = cadastrarPedido
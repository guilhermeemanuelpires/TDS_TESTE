
// CRUD
const produtos = [];
var seqId = 1;
module.exports = {
    inserir: (nome, preco) => {
        const produto = {
            id: seqId++,
            nome,
            preco
        };
        produtos.push(produto);
        return produto;
    },
    delatar: (id) => {
        const data = produtos.filter((item, index) => {
            if (item.id == id) {
                produtos.splice(index, 1);
                return item
            }
        })[0];

        if (data) {
            return "Produto deletado com sucesso!";
        } else {
            return "O código do produto não existe!"
        }
    },
    atualizar: (id, nome, preco) => {
        const data = produtos.filter((item) => {
            if (item.id == id) {
                return item
            }
        })[0];

        if (data) {
            data.nome = nome;
            data.preco = preco;
            return data;
        } else {
            return "O código do produto está invalido!"
        }
    },
    buscaTodosProdutos: () => {
        return produtos
    },
    buscaPorID: (id) => {
        return produtos.filter((item) => {
            if (item.id == id) {
                return item
            }
        })[0];
    }
}
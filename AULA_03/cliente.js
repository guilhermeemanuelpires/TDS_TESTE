const clientes = [];
var seqId = 1;
module.exports = {
    inserir: (nome, cpf) => {
        const cleinte = { id: seqId++, nome, cpf }
        clientes.push(cleinte);
        return clientes
    },
    delatar: (id) => { },
    atualizar: () => { },
    buscaTodosClientes: () => { },
    buscaPorID: (id) => {
        return clientes.filter((item) => {
            if (item.id == id) {
                return item
            }
        })[0];
    }
}
const produto = require("./produto");
const cliente = require("./cliente");
const pedido = require("./pedido");


// TESTE DE PRODUTOS
test("Inserindo um produto", () => {
    const data = produto.inserir("Arroz", 25.75);
    expect(data).toEqual({
        id: 1,
        nome: "Arroz",
        preco: 25.75
    });
});

test("Busca todos os produtos", () => {
    const data = produto.buscaTodosProdutos();
    expect(data).toEqual([{
        id: 1,
        nome: "Arroz",
        preco: 25.75
    }]);
});

test("Busca produto por ID ", () => {
    const data = produto.buscaPorID(1);
    expect(data).toEqual({
        id: 1,
        nome: "Arroz",
        preco: 25.75
    });
});

test("Atualizar produto 1", () => {
    const data = produto.atualizar(1, "Arroz - Tio João", 23.34);

    expect(data).toEqual({
        id: 1,
        nome: "Arroz - Tio João",
        preco: 23.34
    });
});

test("Deletando um produto", () => {
    const data = produto.delatar(1);
    expect(data).toBe("Produto deletado com sucesso!");
});

// TESTE DE CLIENTE

// TESTE DE DO PEDIDO

test("Inerindo um pedido", () => {
    const data = pedido.inserir(1, 1, 3, 2.75);
    expect(data).toEqual({
        id: 1,
        id_produto: 1,
        id_cliente: 1,
        quantidade: 3,
        preco: 2.75,
        total: 8.25
    })
});

test("Busca todos os pedidos", () => {
    const data = pedido.buscaTodosPedidos();

    expect(data).toEqual([
        {
            id: 1,
            id_produto: 1,
            id_cliente: 1,
            quantidade: 3,
            preco: 2.75,
            total: 8.25
        }
    ]);
});

test("Buscar pedido por ID", () => {
    const data = pedido.buscaPorID(1);

    expect(data).toEqual({
        id: 1,
        id_produto: 1,
        id_cliente: 1,
        quantidade: 3,
        preco: 2.75,
        total: 8.25
    })
})

test("Atualiza pedido 1", () => {
    const data = pedido.atualizar(1, 2, 2, 4, 3.00)
    expect(data).toEqual({
        id: 1,
        id_produto: 2,
        id_cliente: 2,
        quantidade: 4,
        preco: 3.00,
        total: 12.00
    })
});

test("Deletando pedido 1", () => {
    const data = pedido.delatar(1);
    expect(data).toBe("Pedido deletado com sucesso!");
})



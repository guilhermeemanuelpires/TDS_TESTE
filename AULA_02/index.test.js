const index = require("./index");

test("Soma de dois valores!", () => {
    expect(index.soma(1, 1)).toBe(2);
});

test("Divisão de dois valores", () => {
    expect(index.divisao(2, 2)).toBe(1);
})

test("Multiplicação de dois valores", () => {
    expect(index.multiplicacao(2, 5)).toBe(10);
})

test("Subitração de dois valores", () => {
    expect(index.subitracao(4, 1)).toBe(3);
})

test("Retorno da pessoa", () => {
    expect(index.pessoa()).toEqual({
        id: 1,
        nome: "Guilherme",
        idade: 27
    })
});
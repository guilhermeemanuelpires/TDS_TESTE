
function soma(a, b) {
    return a + b;
}

function divisao(a, b) {
    return a / b
}

function multiplicacao(a, b) {
    return a * b
}

function subitracao(a, b) {
    return a - b
}

function pessoa() {
    return {
        id: 1,
        nome: "Guilherme",
        idade: 2
    }
}

module.exports = {
    soma,
    divisao,
    multiplicacao,
    subitracao,
    pessoa
}
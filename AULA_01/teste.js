

// Soma de dois valores
function somaDeDoisValores(a, b) {
    return a + b;
};

console.log("A soma de 4 mais 2 é:", somaDeDoisValores(4, 2));

// Multiplicação de dois valores

function multiplicacaoDeDoisValores(a, b) {
    return a * b
}

console.log("A multiplicação de 4 e 2 é:", multiplicacaoDeDoisValores(4, 2));

//Divisão de dois valores

function divisaoDeDoisValores(a, b) {
    return a / b
}

console.log("A divisão de 4 por 2 é:", divisaoDeDoisValores(4, 2));

// Trabalhando com array List
const data = [];

data.push(1);
data.push(2);
data.push(3);
data.push(4);
data.push(5);

console.log(data);

data.splice(4, 1);

console.log(data);


// Utilizando Objetos


const pessoa = {
    id: 1,
    nome: "Guilherme",
    idade: 27
}

console.log(pessoa);
console.log(pessoa.idade);

module.exports = {
    somaDeDoisValores,
    multiplicacaoDeDoisValores,
    divisaoDeDoisValores
}
// Importa nosso modulo de pessoa "pessoa.js"
const pessoa = require("./pessoa");

// Cadastra pessoas
pessoa.cadastraPessoa("Guilherme", 27);
pessoa.cadastraPessoa("Iagor", 18);
pessoa.cadastraPessoa("Guilherme Meurer", 16);
pessoa.cadastraPessoa("Gabriella", 18);
pessoa.cadastraPessoa("Davi", 20);
pessoa.cadastraPessoa("Adriel", 18);
pessoa.cadastraPessoa("Julia", 17);
pessoa.cadastraPessoa("Larissa", 17);
pessoa.cadastraPessoa("Moreira", 17);

// Retorna todas as pessoas
console.log(pessoa.consultaTodasAsPessoas());

// Deleta a pessoa do ID = 3
pessoa.deletaPessoa(3);

// Retorna todas as pessoas
console.log(pessoa.consultaTodasAsPessoas());

// Retorna a pessoa do ID = 4
console.log(pessoa.consultaPessoaID(4));

// Atuliza a pessoa do ID = 1
pessoa.atualizaPessoa(1, "Guilherme Emanuel Pires", 26);

// Retorna a pessoa do ID = 1
console.log(pessoa.consultaPessoaID(1));

// Retorna todas as pessoas
console.log(pessoa.consultaTodasAsPessoas());

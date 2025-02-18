const pessoa = require("./pessoa");

pessoa.cadastraPessoa("Guilherme", 27)
pessoa.cadastraPessoa("Iagor", 18)
pessoa.cadastraPessoa("Guilherme Meurer", 16)
pessoa.cadastraPessoa("Gabriella", 18)
pessoa.cadastraPessoa("Davi", 20)
pessoa.cadastraPessoa("Adriel", 18)
pessoa.cadastraPessoa("Julia", 17)
pessoa.cadastraPessoa("Larissa", 17)
pessoa.cadastraPessoa("Moreira", 17)

console.log(pessoa.consultaTodasAsPessoas());
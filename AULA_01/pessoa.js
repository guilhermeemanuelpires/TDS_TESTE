
//CRUD
// CREATE - CRIAR
// READER - LER
// UPDATED - ATUALIZAR
// DELETE - DELETAR

// ID, NOME, IDADE
const pessoas = [];
var idSeq = 1;

function cadastraPessoa(nome, idade) {
    var pessoa = { id: idSeq++, nome: nome, idade: idade };
    pessoas.push(pessoa);
    return pessoa;
}

function consultaTodasAsPessoas() {
    return pessoas;
}

function deletaPessoa(id){
    
}

module.exports = {
    cadastraPessoa,
    consultaTodasAsPessoas
}

 
// console.log(cadastraPessoa("Guilherme", 27));
// console.log(cadastraPessoa("Iagor", 18));
// console.log(cadastraPessoa("Guilherme Meurer", 16));
// console.log(cadastraPessoa("Gabriella", 18));
// console.log(cadastraPessoa("Davi", 20));
// console.log(cadastraPessoa("Adriel", 18));
// console.log(cadastraPessoa("Julia", 17));
// console.log(cadastraPessoa("Larissa", 17));
// console.log(cadastraPessoa("Moreira", 17));
// console.log(consultaTodasAsPessoas());
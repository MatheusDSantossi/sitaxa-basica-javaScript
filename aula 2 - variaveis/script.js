// Tipos primitivos


// booleanos
console.log('BOOLEANOS')

var vOuf = false

console.log(typeof(vOuf))

console.log('TIPOS DE VARIAVEIS')

// Number
var numberQualquer = 1
console.log(typeof(numberQualquer))

// string
var nome = 'Matheus'
console.log(typeof(nome))

var variavel = ''; // escopo local e global, pode ter seu valo alterado, se não tiver um valor inicial será null
variavel = 'outro'
console.log(variavel)

let variavel2 = 'matheus2' // escopo local, pode ter seu valo alterado, se não tiver um valor inicial será null
variavel2 = 'eu'
console.log(variavel2)

const variavel3 = 3; // escopo local, somente leitura, o valor inicial é obrigatorio e não pode ser alterado
// variavel3 = 'tesxte'
console.log(variavel3)

console.log('ESCOPO GLOBAL E LOCAL')

var escopoGlobal = 'global';
console.log(escopoGlobal)

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal()

// atribuicao
var atribuicao = 'matheus';

// comparacao
var comparacao = '0' == 0;
console.log(comparacao)

// comparacao identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica)

// adicao
var adicao = 1 + 1
console.log(adicao)

// subtracao
var subtracao = 2 - 2;
console.log(subtracao)

//multiplicacao
var multiplicacao = 3 * 3
console.log(multiplicacao)

// divisao Real
var divisaoReal = 6 / 2
console.log(divisaoReal)

// divisao inteira (resto)
var divisaoInteira = 5 % 2;
console.log(divisaoInteira)

// potenciacao
var potenciacao = 2 ** 10
console.log(potenciacao)

// Maior que

var maiorQue = 5 > 2;
console.log(maiorQue)

// menor que
var menorQue = 5 < 2;
console.log(menorQue)

//maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual)

// menor ou igual
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual)

var e = true && false;
console.log(e)

var ou = true || false;
console.log(ou)

var nao = !true
console.log(nao)

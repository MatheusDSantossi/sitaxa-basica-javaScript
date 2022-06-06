var jogador1 = 0;
var jogador2 = 1;
var placar = 0;

// if(jogador1 != -1){

//     if (jogador1 > 0) {
//         console.log('jogador 1 marcou ponto!')

//     } else if (jogador2 > 0) {
//         console.log('jogador 2 marcou ponto!')

//     } else {
//         console.log('Ninguém marcou ponto!')
//     }
// }

jogador1 != -1 && jogador2 != -1 ? console.log('jogadores válidos') :
    console.log('jogadores inválidos')

if (jogador1 > 0 && jogador2 == 0) {
    console.log('jogador 1 marcou ponto!')
    placar = jogador1 > jogador2

} else if (jogador2 > 0 && jogador1 == 0) {
    console.log('jogador 2 marcou ponto!')
    placar = jogador2 > jogador1

} else {
    console.log('Ninguém marcou ponto!')
}
// }

switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador1 ganhou!')
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou!')
        break;
    default:
        console.log('Empatou!')
}

let array = ['valor 1', 'valor 2', 'valor 3', 'valor 4', 'valor 5']

// for executa uma instrução até que ela seja falsa
for(let indice = 0; indice < array.length; indice++) {
    console.log(indice)
}

for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// for com object

let object = {
    nome: 'matheus',
    idade: 20
}

for (i of object.nome) {
    console.log(i)
}

var a = 0;

// while (a < 10) {
//     console.log(a)
//     a++;
// }

do {
    console.log(a)
    a++;
}while(a < 10)
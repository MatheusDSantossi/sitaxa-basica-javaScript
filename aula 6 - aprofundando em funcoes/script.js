// Tipos de função

// declarativas

function funcao() {
    console.log('Sou uma mensagem de uma função declarativa!');
}

funcao();

// expressao de nomeação
// com declaração

var funcao2 = function funcao() {
    console.log('Sou uma mensagem de uma função de dexpressão, com nomeação!');
}
funcao2();

// expressao de nomeação
// com declaração

var funcao3 = function() {
    console.log('Sou uma mensagem de uma função de dexpressão, sem nomeação!');
}

funcao3();

// arrow function

var funcao4 = () => {
    console.log('Sou uma mensagem de uma arrow function!');
}

funcao4();



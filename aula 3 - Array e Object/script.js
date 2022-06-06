// o que são vetores ou arrays

// como declarar um Array

let array = ['string', 1, true]
// console.log(array)

// pode guardar 
let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3']];
// console.log(array)
// console.log('Point 3: ', array2[3])

// forEach
// array2.forEach(function(item, index) {
//     console.log(item, index)
// });

// array.push('novo item');
// array.push();
// console.log(array);

// array2.pop();
// console.log(array2)

// array2.shift();
// console.log(array2)

// array2.unshift('adiciona no inicio')
// console.log(array2)

// console.log(array2.indexOf('adiciona no inicio'))

// array2.splice(0, 3);
// console.log(array2)

// let novoArray = array2.slice(0, 3);
// console.log(novoArray)

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['dois', ['array']],
    objectIntern: {objectInterno: 'objeto interno'}
}

// console.log(object.objectIntern)

var string = object.string;
// console.log(string)

var arrayObjectIntern = object.array;
// console.log(array)

var { string, boolean, objectIntern } = object;
console.log(string, boolean, objectIntern)
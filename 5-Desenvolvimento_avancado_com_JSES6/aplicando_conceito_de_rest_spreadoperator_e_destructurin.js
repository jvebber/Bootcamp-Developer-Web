//Rest e Spread Operator

function sum(a, b){//modo comum para somar valores
    return a + b;
}

console.log(sum(5,5));//10


//No ECMA6 pode-se usar o rest operator. Desta forma, a mesma função ficaria da seguinte forma:

//Rest Operator
numbers = [5, 5, 5, 3, 2];//array example

function sum(...args){
    return args.reduce((total, args) => total + args, 0);
}

console.log(sum(...numbers));//20

//Spread Operatos - pode ser utilizado em strings, arrays, objects 
listNumbers = [5, 5, 5, 3, 2];

const multiply = (...argsMultiply) => 
    argsMultiply.reduce((total, value) => total * value, 1);


const sum2 = (...argsSum) => {
    return multiply (...argsSum);
}

console.log(sum2(...listNumbers))//750


//Spread Operator - String
const str = "Jocenei vebber";

function logArgs(...args){
    console.log(args);
}

logArgs(...str);//['J', 'o', 'c', 'e','n', 'e', 'i', ' ','v', 'e', 'b', 'b','e', 'r']

//Spread Operator - Array
listNumbers2 = [5, 4, 3, 2, 1];

function logNumbers (...numbers){
    console.log(...numbers);
}

logNumbers (...listNumbers2)//5 4 3 2 1

//Spread Operator - Array - Usando para construir um array

arr = [9, 8, 7, 6, ...listNumbers2]

console.log(...arr);//9 8 7 6 5 4 3 2 1

//Spread Operator - literal object (Spread em objetos, só podem ser usados para construir novos objetos)
const obj = {
    numbers: 123
};

const obj2 = {
    ...obj,
    numbers2: 456
};

console.log(obj2);

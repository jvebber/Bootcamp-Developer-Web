//ITERAR ELEMENTOS


//forEach - itera cada item de um array sem alterá-lo

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number, index, numbers) => {
    console.log(`${index}: ${number}: array: ${numbers}`);
});

//map - retorna um novo array a partir da iteração em um array pré existente, não altera o array original

const numberDouble = numbers.map(number => number * 2);

console.log(numberDouble); //[ 2,  4,  6,  8, 10, 12, 14, 16, 18]

/*flat - retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com 
a profundidade especificada*/

const subArray = [1, 2, 3, [4, 5,[6, 7, 8, 9]]];

const NewArray = subArray.flat(1)

console.log(NewArray)//[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9 ] ]








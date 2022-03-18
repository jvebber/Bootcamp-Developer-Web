//ITERAR ELEMENTOS


//forEach - itera cada item de um array sem alterá-lo

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number, index, numbers) => {
    if (number % 2 == 0) {
        console.log(`O número ${number} é par`);
    } else console.log(`${index}: ${number}: array: ${numbers}`);
});


//map - retorna um novo array a partir da iteração em um array pré existente, não altera o array original

const numberDouble = numbers.map(number => number * 2);

console.log(numberDouble); //[ 2,  4,  6,  8, 10, 12, 14, 16, 18]


/*flat - retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com 
a profundidade especificada*/

const subArray = [1, 2, 3, [4, 5,[6, 7, 8, 9]]];

const NewArray = subArray.flat(1)

console.log(NewArray)//[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9 ] ]


//Key - retorna um Array Iterator com as chaves de cada posição do array
const numbersIterator = numbers.keys();



//Valus - retorna um array Iterator que contém os valores para cada elemento do array
const numbersValues = numbers.values();
console.log(numbersValues.next);


//find - Buscar elementos

const numbersFind = [1, 3, 4, 5, 6, 7, 8, 9];
constFirstNumberEven = numbersFind.find(value => value % 2 == 0);

console.log(constFirstNumberEven);//4


//filter - retorna um novo array com todos os elementos de um array que satisfaçam determinada condição
const allValuesEven = numbersFind.filter (value => value % 2 == 0);
console.log(allValuesEven);//[ 4, 6, 8 ]


//includes - retorna um valor booleano verificando se determinado elemento existe no array
const hasItemSeven = numbersFind.includes(7);
console.log(hasItemSeven);//true


//Join - junta todos os elementos de um array separado por um delimitador e retorna uma string
const numbersJoin = numbersFind.join('-');
console.log(numbersJoin);//1-3-4-5-6-7-8-9


//reduce - itera cada posição retornando um novo tipo de dado ou um array
 const numbersAverage = numbersFind.reduce((total, numbersFind) => total += numbersFind,0)/numbersFind.length;
 console.log(numbersAverage);









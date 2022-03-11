//Criando um array

arr = [1,2,3];


//Array.from - Espera por um parâmetro array-like (node list, por exemplo) ou iterable object (set map, por exemplo)

const divs = document.querySelectorAll('div');//É necessário estar uma página html

const divArray = array.from(divs);

console.log(divArray);


//Inserindo e removendo elementos de um array

//PUSH - para adicionar no final do array - retorna o tamanho da lista. Exemplo 

fruits = ['laranja', 'uva', 'melancia'];

console.log(fruits);       //['laranja', 'uva', 'melancia']

fruits.push('banana')      //inserindo elemento no array

console.log(fruits.length);//tamanho do array fruits


//POP - para remover o último elemento do array - retorna o último elemento removido. Exemplo:

const removeFruits = fruits.pop();

console.log (removeFruits) //melancia

console.log (fruits)       //['laranja', 'uva']


//UNSHIFT - para adicionar no inicio do array - retorna o tamanho da lista. Exemplo

fruits.unshift('abacate');

console.log(fruits)



//SHIFT (ALTERA O ARRAY) - para remover o PRIMEIRO elemento do array - retorna o último elemento removido. Exemplo:
const removeFruitsInitial = fruits.shift();

console.log(removeFruitsInitial)//abacate

console.log(fruits)             //[ 'laranja', 'uva', 'melancia' ]


//CONCAT - para concatenar dois arrays. Exemplo:
const salgados = ['pastel', 'coxinha', 'empada']

const alimentos = fruits.concat(salgados) 

console.log(alimentos) //[ 'laranja', 'uva', 'melancia', 'pastel', 'coxinha', 'empada' ] - A ordem dos arrays interfere no array final


//SLICE - "Fatia" um array de várias formas conforme o paâmetro. Exemplo:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.slice(0,2));//da posição zero até a 2, sendo que não pega a posição 2: [1, 2]

console.log(numbers.slice(2));  //da posição 2 em diante,inclusive a posição 2:            [3, 4, 5, 6, 7, 8, 9]

//Números negativos retornam do final do array para o início, conforme o parâmetro informado. Exemplos:

console.log(numbers.slice(-1)); // [9]

console.log(numbers.slice(-3)); // [7, 8, 9]


//SPLICE (ALTERA O ARRAY) - A partir de um elemento, retira uma quantidade determinada e, se for desejado, insere outro(s) 

console.log(numbers.splice(8));//retira os elementos que existem a partir da posição 8

console.log(numbers);          //[1, 2, 3, 4, 5, 6, 7, 8]


console.log(numbers.splice(0,0, 0));//a partir da posição zero, retire zero elementos e insira o elemento "0"

console.log(numbers);          //[0, 1, 2, 3, 4, 5, 6, 7, 8]









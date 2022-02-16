// ------ STRINGS ------ //

// variáveis
const texto = "Texto";
const myNumber = 12.9092;


//Retorna um array quebrando a string por um delimitador
const splittedText = 'texto'.split('x');
console.log("\n Array com as posições separadas pelo delimitador:", splittedText);


//Retorna o tamanho de uma strin
const textSize = texto.length;
console.log("\n Quantidade de letras:", textSize);


//Busca por um valor e substitui por outro
const replacedText = texto.replace("Texto", "otxeT");
console.log("\n Substitui 'texto'por:", replacedText);


//Retorna N caracteres a partir de uma determinada posição da string
const charDeterminate = texto.substring(0,2);
console.log("\n Duas primeiras letras são:", charDeterminate);


// ------ NUMEROS ------ //

// Transforma número em string
const numberAsString = myNumber.toString();
console.log('\n Numero em string:', typeof numberAsString);


// Retorna número com um número determinado de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log("\n Número com duas casas decimais:", fixedTwoDecimals);


//Transforma uma string em float
const stringToFloat = parseFloat(myNumber);
console.log("\n String transformada em float:", stringToFloat);

//Transforma uma string em int
const stringToInt = parseInt(myNumber);
console.log("\n String em Int:", stringToInt);













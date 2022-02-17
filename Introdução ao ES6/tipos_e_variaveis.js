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

// typeof é usado para saber o tipo da variável
const tipoVariavel = 12;
console.log("\nO tipo da variável é:", typeof tipoVariavel);


// ------ OBJECT ------ //

//Objeto exemplo
let user = {
    name: "Jocenei",
    lastName: "Vebber"
};

//Acessando uma propriedade do objeto
console.log("\n Propriedade nome:", user.name);
console.log(user);

//Criando uma propriedade do objeto
user.age = 32;

//Trocando uma propriedade do objeto
user.name = 'João'
console.log(user);

//Deletando uma propriedade do objeto
delete user.age;
console.log(user);


// ------ OBJECT - FUNÇÕES ------ //
let user = {//Objeto exemplo
    name: "Jocenei",
    lastName: "Vebber",
    age: 32
};
//Recupera as chaves do objeto
console.log("\nPropriedades do objeto user usando .keys:", Object.keys(user));

//Recupera os valores do objeto
console.log("\nValores do objeto user usando .values:", Object.values(user));

//Retorna  um array de arrays contendo chave e valor
console.log("\nLista de propriedades e valores usando .entries:", Object.entries(user));


//Mergear propriedades de objetos

//Não é o recomendado, o recomendado é criar um outro objeto (copiar)
Object.assign(user, {occupation: "Developer"});
console.log("\n Adiciona a propriedade ocupação ao objeto usando .assign:", user)

//Mergear propriedade de objetos criando um novo objeto (recomendado)
Object.assign({}, user, {age: 33});
console.log("\nNovo Objeto a partir de user:", Object.assign({}, user, {age: 33}));
console.log(user); //user original


// ------ SYMBOL ------ //
const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log("\nSymbol1 é igual ao Symbol2 ?", symbol1 === symbol2);

//Symbols criam propriedades que não enumerables
const nameSymbol1 = Symbol();
const lastNameSymbol2 = Symbol();

const user = {//Objeto exemplo
    [nameSymbol1]: "João",
    [lastNameSymbol2]: "Silva",
    name: "Jocenei",
    lastName: "Vebber",
    age: 32
}

for (const key in user) {
    if (user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }   
}

console.log("\n",user[nameSymbol1]);



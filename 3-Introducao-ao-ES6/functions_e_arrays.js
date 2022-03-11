//*********FUNCTIONS********** //

//Function é considerado um objeto

//Função 1
function fn(){
    return "Code here 1"
}
console.log(fn());

//Função 2
const arrowFunc = () => "Code here 2";
console.log(arrowFunc());

// Função 1 é a mesma coisa que Função 2


//Função com mais de uma expressão tem que ter "return". Exemplo:

const arrowFunc2 = (value) => { 
    var myNumber;

    if (value == 1){
        myNumber = value * 1;             
    }
    if(value == 2){
        myNumber = value*2; 
    }
    return myNumber;
}     
      
console.log("\nValor retornado:",arrowFunc2(2));


//*********ARRAY********** //
const users = ["Jocenei", "Irio", "Jonathan"];

const gender = {
    man: Symbol("M"),
    woman: Symbol("W")
}

const persons = [
    {
        name: "Jocenei",
        age: 32,
        gender: gender.man
    },
    {
        name: "Irio",
        age: 35,
        gender: gender.man
    },
    {
        name: "Munique",
        age: 30,
        gender: gender.woman
    }
]

//Retorna a quantidade de itens de um array usando "lenght"
console.log("\nQuantidade de itens do array:", persons.length);


//Verificar se é array usando "isArry"
console.log("\nA variável persons é um array?:", Array.isArray(persons));

//Itera os itens do array
persons.forEach((person, index) => {
    console.log(`Nome: ${person.name}, está no index: ${index}`);
});


//Filtrar um array usando "filter"
const mens = persons.filter(person => person.gender === gender.man) //Filtra as pessoas que são homens
console.log("\nNova lista de pessoas somente homens", mens);

//Retornar um novo array usando "map"
const personsWithCourse = persons.map(person => {
    person.couse = "Introdução ao JavaScript"; //Insere um curso para cada pessoa, sem alterar o array original
    return person;
});

console.log("\nNova lista de pessoas com curso", personsWithCourse);

//Transforma um array em outro tipo
const totalAge = persons.reduce((idade, pessoas) => {
    idade += pessoas.age; // Soma a idade das pessoas
    return idade;
}, 0);

console.log("\nSoma das idades das pessoas", totalAge);


//Juntando as operações (filter + reduce)
const totalAgePar = persons
    .filter (pessoas => pessoas.age % 2 ===0) //Filtra as pessoas com idade par
    .reduce((idade, pessoasPar) => {
        idade += pessoasPar.age;
        return idade;
    },0);

console.log("\nSoma das idades das pessoas que possuem idade par", totalAgePar);




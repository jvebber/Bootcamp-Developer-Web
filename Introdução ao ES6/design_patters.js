/*

Design Patters (padrões de projetos): Não de trata de um framework ou um código pronto, mas é uma definição
em mais alto nível de como um problema comum pode ser solucionado.

TIPOS:

- Criação: abstraem e/ou adiam o processo de criação de objetos
- Estruturais: se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores
- Comportamentais: se concentram nos algoritmos e atribuições de responsabilidade entre os objetos. Descrevem os padrões
de comunicação entre os objetos



MAIS USADOS:
- Factory      tipo: Criação 
- Singleton    tipo: Criação 
- Decorator    tipo: Estrutural
- Observer     tipo: Comportamental 
- Module

*/

//FACTORY

function Pessoa(customProperties) {
    return{
        name: "Jocenei",
        lastName: "Vebber",
        ...customProperties
    }
}

const p = Pessoa({name: "Custom Name", age: 32});//Se chamar a função usando "New Pessoa", não será considerado uma factory

console.log(p);//{ name: 'Custom Name', lastName: 'Vebber', age: 32 }



//SINGLETON - O objetivo é criar uma única instância de uma função e retorná-la toda vez em que for necessário utilizá-la.Exemplo

function User(){
    if(!User.instance){
        User.instance = this;
    }

    return User.instance;
}

const user1 = User.call({name: "Jocenei"});
const user2 = User.call({name: "Custom Name"});

console.log(user1);//Jocenei
console.log(user2);//Jocenei



/*

DECORATOR - Recebe outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente. 
Enriquece a utilização de uma função, ao condicionar sua execução à outra função.
Exemplo:

*/
var loggedIn = false;

function callIfAuthenticated(fn){//função que autentica a chamada de outra função
    return !!loggedIn && fn();
}


function sum(a,b){//só é executada se for autenticada pela função callIfAuthenticated
    return a + b;
}

function div(a,b){//só é executada se for autenticada pela função callIfAuthenticated
    return a / b;
}


console.log(callIfAuthenticated(() => div(2, 3)));//false

loggedIn = true;

console.log(callIfAuthenticated(() => sum(2, 3)));//5

console.log(callIfAuthenticated(() => div(2, 3)));//0.66666...

//OBSERVER




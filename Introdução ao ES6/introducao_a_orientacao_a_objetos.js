/*

- Herança
- Classes
- Modificadores de acessos
- Encapsulamento
- Static

*/

//CLASSES
class Person {      //Exemplo 1 - Classes
    constructor(name){
        this.name = name;
    }
}

class PersonF extends Person {
    constructor(name, cpf){
        super(name);
        this.cpf = cpf;
    }
}

const jocenei = new PersonF("Jocenei", "055.505.329-18");

console.log(jocenei);


class Animal{       //Exemplo 2 - Classes
    constructor(){
        this.qtdePatas = 4;
    }
}

class Dog extends Animal {
    constructor(name,breed){
        super();
        this.name = name;
        this.breed = breed;
    }

    latir(){
        return "Au, Au, Au";
    }
    
}

const pitbull = new Dog("Negão", "Pitbull");

//console.log (pitbull.latir());

console.log(`Nome: ${pitbull.name}, Raça: ${pitbull.breed}, Som: ${pitbull.latir()}`, );


//MODIFICADORES DE ACESSO E ESCAPSULAMENTO

class Person{
    #name='';

    constructor(name){
        this.#name = name;
    }

    set name(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }
}

const person1 = new Person("Jocenei");

console.log (person1.name);//Jocenei

person1.name = "Guilherme";

console.log (person1.name);//Guilherme


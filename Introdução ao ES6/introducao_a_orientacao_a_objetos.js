/*

- Herança
- Classes
- Modificadores de acessos
- Encapsulamento
- Static

*/

class Person {
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



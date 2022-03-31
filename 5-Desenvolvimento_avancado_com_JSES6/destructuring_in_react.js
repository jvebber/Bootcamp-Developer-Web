//Destructuring

const fruits = ['Orange', 'Banana', 'Apple', 'Watermelon'];//example variable

/* forma antiga de atribuir parte de uma variável à outra

var orange = fruits[0];
var banana = fruits[1];
var apple = fruits[2];

*/

//using destructuring assignment
var [orange, banana, apple] = 
[
    'Orange',
    'Banana',
    fruits[2]
];

console.log (apple);//Apple

//Destructuring assignment in objects
var people = {
    name: 'Jocenei',
    props:{
        age: 32
    }
}

var {name: name} = people;//objeto name com o name de people - Jocenei

var {props: {age}} = people;

console.log(age);//32

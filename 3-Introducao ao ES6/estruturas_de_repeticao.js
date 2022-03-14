//*********ESTRUTURAS de REPETIÇÃO********** //

/*
- FOR
- WHILE
- DO...WHILE
- FOR...IN/OF
- CONTINUE
- BREAK
*/

//For

const numbers = [2,3,4,5,6,8,9,10,15,25];

/* for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(`O elemento do array é ${element}`);
}


//While
var index = 0;
while (index < numbers.length) {
    console.log("Lendo array com while, elemento:", numbers[index]);
    index++;
}



//Do...While
var index = 0;

do {
    console.log("Lendo array com Do...while, elemento:", numbers[index]);
    index++;
} while (index < numbers.length);

numbers.foo = "Hello"; // para aplicar for in and for of logo abaixo */

//for in 
// for (var key in numbers) {
//         console.log("Lendo array com For In, elemento:", key);
// }


//for of
for (var key of numbers) {
        console.log("Lendo array com For OF, elemento:", key);
}




//*********ESTRUTURAS CONDICIONAIS********** //

//IF

const array = [0,1,2,3,4,5,6,7,8,9,10];

array.forEach(item => {
    if(item % 2 === 0){
        console.log(`\nO número ${item} é par`);
    } else {
        console.log(`\nO número ${item} é impar`)
    }
});

const array2 = [2,3,4,5,6,8,9,10,15,25];
//ELSE IF
array2.forEach(item => {
    if(item % 2 === 0){
        console.log(`\nO número ${item} é divisível por 2`);
    } else if (item % 3 === 0){
        console.log(`\nO número ${item} é divisível por 3`);
    } else if (item % 5 === 0){
        console.log(`\nO número ${item} é divisível por 5`);
    }
})

//SWITCH CASE
const fruits = ["banana", "pera", "melancia", "laranja"];

fruits.forEach(item => {
    switch (item){
        case "banana":
            console.log(`\nO preço da ${item} é R$ 2,00`);
            break;
        case "pera":
            console.log(`\nO preço da ${item} é R$ 3,00`);
            break;
        case "melancia":
            console.log(`\nO preço da ${item} é R$ 1,99`);
            break;
        case "laranja":
            console.log(`\nO preço da ${item} é R$ 3,99`);
            break;
    }   
});










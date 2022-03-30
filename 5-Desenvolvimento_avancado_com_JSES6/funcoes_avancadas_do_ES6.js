//DEFAULT FUNCTION ARGUMENTS

function multiply(a, b = 1){//estabelecendo valor padrão para 'b' caso não seja passado nenhum valor na chamada de função
    return a * b;
}

console.log(multiply(5, undefined));



//SHORT RANGE - UTILIZANDO FUNÇÕES PRA CONSTRUIR MÉTODOS

// forma 1
function method1(){
    console.log('method called');
};

var obj = {
    method1
};

obj.method1();


//forma 2
var obj = {
    sum(a, b){
        return a + b;
    }
}

console.log(obj.sum(1,5));
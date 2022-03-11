//*********OPERADORES********** //

/*
- Aritméticos
- Atribuição
- Comparação
- Condicional
- Lógicos
- Spread
*/

//*********Aritiméticos********** //

//Módulo
12 % 5 //retorna 2

// Incremento (++) e Decremento (--)
++x
x++

const a = ++2;//3
const b = 2++;//2

//Negação (-) e Adição (+)
-3
+"3"    //Retorna 3
+true   //Retorna 1
+false  //Retorna 0
-true   //Retorna -1

//Operador de exponenciação (**)
2**3    //retorna 8
2**4    //retorna 16


//*********Atribuição********** //

x = y

// Atribuição de adição
x += y

// Atribuição de subtração
x -= y

// Atribuição de multiplicação
x *= y

// Atribuição de divisão
x /= y

// Atribuição de resto
x %= y


//*********Comparação********** //

//Igual (==)
3 == "3" // irá retornar true

//Igual estrito (===) além do valor compara tbm o tipo
3 === 3     // irá retornar true

3 === "3"   // irá retornar false

//Diferente (!=)

3 != 4      //irá retornar verdadeiro

//estritamente diferente (!==)

3 !== 3     // irá retornar false

3 !== "3"   // irá retornar true

//Maior que (>)
5 > 1       // irá retornar true


//Maior que ou igual (>=)
3 >= 4      //irá retornar false
3 >= 3      //irá retornar true

//Menor que (<)
1 < 5       //irá retornar true

//Menor que ou igual (<=)
2 <= 0      //irá retornar false




//*********Condicional********** //

 //Ternário
 true ? "foo" : "bar"       //retorna "foo"
 false ? "foo" : "bar"      //retorna "bar"


//*********Lógicos********** //

// End - Todas as condições tem que ser verdadeiras para retornar true


// Or - Basta uma condição ser verdadeira para retornar true


//*********Spread********** //

// ...

var partes = ["ombro", "joelho"];
var musica = ["cabeça", ...partes, "pés"];

var musica = ["cabeça", "ombro", "joelho", "pés"];

// para passar para uma função

function fx (x, y, z){}

var args =  [0, 1, 2];

fx(...args);

//*********OUTROS********** //

delete args;

typeof args;



//*********BINÁRIOS********** //

//in

something in somethingItems // primeiro ESTÁ no segundo

// in usado em Arrays

var arvores = ["pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro"];
0 in arvores;       //retorna true
3 in arvores;       //retorna true
6 in arvores;       //retorna false

"cedro" in arvores  //retorna false (deve-se especificar o indice e não o valor)
"cedro" in arvores[2] // agora sim retorna true

//Objetos predefinidos
"PI" in Math;      //retorna true


//Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meuCarro;    //retorna true
"cor"   in meuCarro;    //retorna false

//instaceof




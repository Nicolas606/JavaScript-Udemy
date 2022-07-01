

console.log(console.log('Hola Mundo'))
/* 
VARIABLE: es un contenedor de informacion que apunta a un lugar de memoria.
Dicha informacion puede cambiar en el furuto 
*/

let n = 10;
var i = 10;
const j = 10;

// j = 20: // no se puede cambiar el valor de una constante 

/* 
POLYFILL:  es uncodigo que provee el funcionamiento de una nueva caracteristica
de JavaScript (ES6), en versiones viejas como (ES5) 
*/

let a = 10,
b = 20,
c = "Hola ",
d = "Spiderman",
x = a + b;

const saludo = c + d;

// Maneras de imrpimir en la consola
console.log( "%c Mis variables", "color:blue");
console.log( {a} );
console.warn( {b} );
console.error( {x} ); 
console.table([a, b, c, d, x])


c = "Hola de nuevo "
/* 
    BOOLEAN - true / false :: verdadero::falso
    Null - sin valor en lo absoluto
    Undefined - una variable declarada que aun no se le asigna valor
    Number -  integers, float
    String - una cadena de caracteres
    Symbol - es un valor unico que no es igual a mimgum optro valor
*/


let nombre  = "Peter Parker";
console.log( nombre );

nombre = "Ben Parker";
console.log( nombre );

nombre = "Tia May";
console.log( nombre );


console.log( typeof nombre );

let esMarvel = true;
console.log( typeof esMarvel );


let edad = 29
console.log( typeof edad );

edad = 29.00014
console.log( typeof edad );


let superPoder;
console.log( typeof superPoder );


let soyNull = null;
console.log( typeof soyNull );

let symbol1 = Symbol("a");
let symbol2 = Symbol("a");

console.log( typeof symbol1 );
console.log( symbol1 === symbol2 ); 





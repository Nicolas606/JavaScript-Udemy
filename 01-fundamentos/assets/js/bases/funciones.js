// definir una funcion 

function saludar( nombre ){
    console.log("Hola " + nombre);
}

const saludar2 = function( nombre ){
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log( 'Hola flecha' );
}

const saludarFlecha2 = (nombre) => {
    console.log( 'Hola ' + nombre );
}



saludar( 'Nicolas' );
saludar2( 'Nicolas' );
saludarFlecha()
saludarFlecha2( 'Nicolas' )

function sumar( a, b ) {
    return a + b;
}

const sumar2 = (a,b) => {
    return a + b;
}

const sumar3 = (a,b) => a + b;

console.log(sumar( 1, 2));
console.log(sumar2( 5, 2));
console.log(sumar3( 2, 2));


function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio() )
console.log( getAleatorio2() )
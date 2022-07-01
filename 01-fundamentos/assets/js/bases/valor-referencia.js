// los valores primitivos se pasan por valor
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// los objetos se pasan por referencia 
let nicolas = { nombre: 'Nicolas' };
let felipe = nicolas
felipe.nombre = 'felipe';

console.log({ nicolas, felipe });

// para crear una copia de un objeto, colocarlo en {} con el operador spred (...)
let juan = { nombre: 'Juan' };
let ana = {...juan}
ana.nombre = 'Ana';

console.log({ juan, ana });


const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);


console.log({ peter, tony });


// desreferenciar en una funcion, pasamos el argumento como un objeto y utilizamos el operador rest (...)
const cambiaNombre2  = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}


let peter2 = { nombre: 'Peter' };
let tony2 = cambiaNombre2(peter);

console.log({ peter2, tony2 });

// Arreglos

const frutas =  ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFutas2 = frutas.slice;
console.timeEnd('slice');


console.time('spread');
const otrasFutas = [...frutas]; // creamos un nuevo arreglo y con el operador spread separamos cada uno de los elementos
console.timeEnd('spread');

otrasFutas.push('Mango');

console.table( { frutas, otrasFutas});

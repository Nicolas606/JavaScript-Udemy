// Como devolver un objeto en una funcion 
function crearPersona( nombre, apellido ) {
    return { nombre, apellido};
}

const crearPersona2 = (nombre, apellido) => ({nombre, apellido});

console.log( crearPersona('Nicolas', 'Castillo') );
console.log( crearPersona2('Angie', 'Lopez') );

function imprimeArgumentos(){
    console.log( arguments);
}

// LOS (...) NOS DA EN UN ARREGLO TODOS LOS ARGUMENTOS CUANDO AMNEJAMOS LA FUNCION DE FLECHA
const imprimeArgumentos2 = (edad, ...args) => {
    // console.log( edad, args );
    return args;
}

const argumentos  = imprimeArgumentos2(10, true, false, 'Nicolas', 'Hola');
// imprimeArgumentos(10, 5, 'Nicolas', 'Hola');
// imprimeArgumentos2(10, 5, 'Nicolas', 'Hola');
console.log( argumentos);

// en la definicion de la constante se le puede dar un nombre a cada una de las posiciones del arreglo 

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Nicolas', 'Hola');
console.log({casado, vivo, nombre, saludo});

// si tiene una funcion q devuelva un objeto se puede hacer lo mismo de obtener solo la propiedad que necesito
// si quiero cambia el nombre se usan los dos puntos (:)


const {apellido} = crearPersona2('Nicolas', 'Castillo');
console.log({apellido});


// destructuracion de argumentos

let personajeTony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePopiedades = ( personaje ) => {
    
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }


const imprimePopiedades = ( {nombre, codeName, vivo, edad = 15, trajes} ) => {
    
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePopiedades( personajeTony )
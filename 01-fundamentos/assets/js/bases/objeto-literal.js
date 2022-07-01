let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        long: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion :{
        zip: '11084, 302569',
        ubicacion: 'Malibu, California',
    }
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Edad', personaje['edad']);

console.log('Coors', personaje.coords);
console.log('Coors', personaje.coords.lat);

console.log('Numero de trajes:', personaje.trajes.length);
console.log('Ultimo trajes:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

// Mas detalles

// delete para eliminar la propiedad que se quiere eliminar

delete personaje.edad;
console.log( personaje );

// Object.entries convierte nuesto objeto en un arreglo 

const entriesPares = Object.entries( personaje );
console.log( "entriesPares", entriesPares );


// crear una nueva propiedad
personaje.casado = true;


// congela el objeto, lo que quiere decir que no le puede agregar ni cambiar las propiedades
// pero no congela los objetos que estan dentro
Object.freeze( personaje );

personaje.dinero = 10000000;

console.log( personaje );

// getOwnPropertyNames devuelve las propiedades en una arreglo
const propiedades = Object.getOwnPropertyNames( personaje );

console.log( propiedades );

// values devuelve los valores en un arreglo
const valores = Object.values( personaje );

console.log( valores );













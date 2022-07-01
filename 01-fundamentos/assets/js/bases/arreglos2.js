let juegos = [ 'Zelda', 'Mario', 'Metroit', 'Chrono'];
console.log('Largo', juegos.length); 

let primero = juegos[0];
let ultimo  = juegos[ juegos.length - 1];

console.log( {primero, ultimo} );


//recorre cada uno de los elemento del arreglo
juegos.forEach( (elemento, indice, arr)  => { 
    console.log({ elemento, indice, arr})
});

//agrega un o mas elementos al final del arreglo
let nuevalongitud = juegos.push( 'f-Zero' );
console.log( {nuevalongitud, juegos} );

// agrega uno o mas elementos al principio del arreglo
nuevalongitud = juegos.unshift( 'Fire Embled' );
console.log( {nuevalongitud, juegos} );

// elimina el ultimo elemento del array
let juegoBorrado = juegos.pop();
console.log( {juegoBorrado, juegos} );


let pos = 1;

// cambia el contenido de un array eliminando elementos existentes 
//  y/o agregando nuevos elementos.
let juegosBorrados = juegos.splice( pos, 2);
console.log({ juegosBorrados, juegos });


// retorna la posicion indice donde se encuentra el elemento
let metrotIndex = juegos.indexOf( 'Metroit' );
console.log({ metrotIndex });








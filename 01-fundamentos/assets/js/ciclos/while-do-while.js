
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while ( i < carros.length ) {
//     console.log(carros[i]);
//     i++;
// } 

//  son consideradas condiciones falsas y nunca se va a ejecutar el while
// undefined
// null
// false
console.warn('while');

while (carros[i]) {
    if (i === 1) {
        // breack;
        i++;
        continue;
    }
    
    console.log( carros[i] );
    i++;
}


console.warn('Do While');

let j = 0
do {
    console.log( carros[j])
    j++;
} while( carros[j]);







let a = 10;

if (a > 10){
    console.log('A es mayor a 10')
} else {
    console.log('A es menor a 10')
}

console.log('Fin del programa ')

const hoy = new Date();
let dia = hoy.getDay();

console.log({dia})

if (dia === 0) {
    console.log('hoy es domingo');
} else {
    console.log('No es domingo ');
}

const semana = {
    0 : 'Domingo',
    1 : 'Lunes',
    2 : 'Martes',
    3 : 'Miercoles',
    4 : 'Jueves',
    5 : 'Viernes',
    6 : 'Sabado',
};

const semanaArreglo = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
];

dia = 5
console.log('el dia de la semana es ', semana[dia])
console.log('el dia de la semana es ', semanaArreglo[dia])

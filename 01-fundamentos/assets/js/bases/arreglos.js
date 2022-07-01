/* 
    Son un objeto muy parecido a una lista de informacion, que contienen 
    un grupo de elemntos.
    usualmente esa infomracion dentro del arreglo es del mismo tipo de daro 
*/

// const arr = new Array(10);
// const arr = [];

let videoJuegos = [ "Mario3", "Megaman", "Warsone" ];
console.log({ videoJuegos });

console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    "Nicolas",
    1 + 2,
    function (){},
    () => {},
    { a : 1 },
    [ "X", "Megaman", "Zero", "Dr. Light", [
        " Dr. Willy",
        "Woodman"
    ]]
];

// console.log( arregloCosas )
console.log( arregloCosas[7][4][0] )





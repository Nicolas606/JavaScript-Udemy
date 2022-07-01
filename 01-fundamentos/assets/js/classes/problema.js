

const nicolas = {
    nombre: 'Nicolas',
    edad: 29,
    imprimir() {
        console.log(`Nombre ${this.nombre} - edad: ${this.edad}`);
    }
}

const angie = {
    nombre: 'Angie',
    edad: 30,
}

// se pone el nombre de la funcion en mayuscula para saber que es para crear instancias 
// esto no es tan funcional porque toca aclarar a el programador que tiene que usar new para crear una nueva instancia
function Persona(nombre, edad) {

    this.nombre = nombre,
    this.edad = edad,
    this.imprimir = () => {
        console.log(`Nombre ${this.nombre} - edad: ${this.edad}`);
    };
}

const maria = new Persona('Maria', 18);
const jesus = new Persona('Jesus', 30);
console.log(maria);
maria.imprimir();
jesus.imprimir();


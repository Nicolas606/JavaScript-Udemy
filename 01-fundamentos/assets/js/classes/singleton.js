

// ]es una instancia unica de mi clase


class Singleton {

    static intancia;
    nombre = '';

    constructor (nombre = ''){

        if (!!Singleton.intancia){
            return Singleton.intancia;
        }

        Singleton.intancia = this;
        this.nombre = nombre;
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Tony Stark');
const instancia3 = new Singleton('BlackPanther');

console.log(`Nombre en la instancia1 ${ instancia1.nombre}`)
console.log(`Nombre en la instancia2 ${ instancia2.nombre}`)
console.log(`Nombre en la instancia3 ${ instancia3.nombre}`)

class Persona {
    
    // propiedad estatica
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + 'instancias';
    }

    static mensaje(){
        console.log('Hola a todos');
    }



    // propiedades de clase
    nombre;
    codigo;
    frase;
    comida;

    constructor( nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase() ;
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }




    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidas es ${this.codigo}`)
    }
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }

};


const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman   = new Persona('Tony Starck', 'Ironman', 'Yo soy Ironman');




// console.log(ironman);
spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia may'

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);

// Persona._conteo = 2

console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();






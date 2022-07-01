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
    nombre = 'Sin nombre';
    codigo = 'Sin codigo';
    frase = 'Sin frase';
    comida = 'Sin comida';

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




class Heroe extends Persona {
    clan = 'sin clan';
    
    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'los Avengers'
    }

    // se puede crear un metodo que se llame igual al del padre 
    quienSoy() {
        console.log(`Soy ${ this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}


const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');

// const spiderman = new Persona();

console.log(spiderman);

spiderman.quienSoy();

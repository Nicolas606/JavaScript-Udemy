
class Persona {

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo(){
        console.log(`ìnfo: ${this.nombre}, ${this.apellido} , ${this.pais}` )
    }

}

const nombre1   = 'Nicolas',
      apellido1 = 'Castillo',
      pais1     = 'Colombia';


const fher = {
    nombre:   'Fernando',
    apellido: 'Herrera',
    pais :    'Costa rica'
}


const persona1 = new Persona(nombre1, apellido1, pais1);
console.log(persona1)

const persona2 = Persona.porObjeto(fher);
console.log(persona2)






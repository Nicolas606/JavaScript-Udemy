
const regresaTrue = () =>{
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);

console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true);
console.log( true && false);

console.log ( regresaFalse() && regresaTrue()); 
console.log ( regresaTrue() && regresaFalse());


console.warn('0R') //tru si alguno de los valores es verdadero
console.log( true || true);
console.log( true || false);

console.log ( regresaTrue() || regresaFalse());
console.log ( regresaFalse() || regresaTrue()); 


console.warn('Asignasiones') 

const soyUndifined = undefined;
const soyNull = null;
const soyfalse = false;

const a1 = true && 'Hola mundo' && 150;
const a2 = false && 'Hola mundo' && 150;
const a3 = 'hola' && 'mundo' &&  soyfalse && true;
const a4 = soyfalse || soyNull || soyUndifined || 'Ya no souy un falso de nuevo';
const a5 = soyfalse || soyNull || regresaTrue() || 'Ya no souy un falso de nuevo';
const a6 = soyfalse || 'Ya no soy un falso';


console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
console.log(a6)






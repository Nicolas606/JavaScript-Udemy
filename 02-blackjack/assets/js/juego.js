/* 
* 2C = two of Clubs (treboles)
* 2D = two of  Diaminds (dimamantes)
* 2H= two of Hearts (corazones)
* 2S = two of Spades (picas)
*/

const miModulo = (( ) => {
    'use strict' //se extricto al usar mi codigo 


    let deck           = [];
    const   tipos      = ['C', 'D', 'H', 'S' ],
            especiales = ['A', 'J', 'Q', 'K' ];

    
    let puntosJugadores = [];
    
    // !Referencias del HTML
    const btnPedir             = document.querySelector('#btnPedir');
    const btnDetener           = document.querySelector('#btnDetener');
    const btnNuevo             = document.querySelector('#btnNuevo');

    const   puntosHTML           = document.querySelectorAll('small'),
            divCartasJugadores     = document.querySelectorAll('.divcartas');

    // Esta funcion inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];
        for ( let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem  => elem.innerHTML = 0);

        divCartasJugadores.forEach(elem  => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled =false;
        
    }

    
    // Esta funcion crea un nuevo deck(baraja)
    const crearDeck = () => {

        deck = [];
        for (let i = 2; i <= 10; i++){
            for (let tipo of tipos) {
                deck.push( i + tipo)
            }
        }
        for (let especial of especiales){
            for (let tipo2 of tipos){
                deck.push( especial + tipo2 )
            }
        }
        return _.shuffle(deck);
    }
    
    
    // Esta funcion me permite crear una nueva carta 
    const pedircarta = () => {
        return deck.shift();
    };
    
    //Esta funcion sirve para obtener el valor de la carta 
    const valorCarta = (carta) => {
    
        const valor = carta.substring(0 , carta.length -1);
        return (isNaN(valor)) ? 
                (valor === 'A')? 11 : 10
                : valor * 1;
    }
    
    // Turno: 0 = primer jugador y el ultimo de la computadora
    const acumularPuntos = (carta, turno) =>{

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    // Crear la carta en la visual
    const crearCarta = (carta, turno) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append( imgCarta );
    }

    const determinarGanador = () => {

        const [puntosMinimos,puntosComputadora ] = puntosJugadores;
        setTimeout(() => {
            if (puntosMinimos > 21){
                alert('PERDISTE');
            } else if (puntosMinimos === puntosComputadora){
                alert('EMPATASTE');
            } else if (puntosComputadora > 21) {
                alert('GANASTE');
            }else {
                alert('PERDISTE');
            }
        }, 100);
    }


    // ! Turno de la computadora
    const turnoComputadora = ( puntosMinimos) => {
        let puntosComputadora = 0;

        do {
            const carta = pedircarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length -1);

            crearCarta(carta, puntosJugadores.length -1)
    
            if (puntosMinimos > 21){
                break;
            }
    
        } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();
    };
    
    
    // !Eventos
    
    btnPedir.addEventListener('click', function() {
        
        const carta = pedircarta();
        let puntosJugador1 = acumularPuntos(carta, 0);
        
        crearCarta(carta, 0);
    
        if (puntosJugador1 > 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador1);
            
        } else if (puntosJugador1 === 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador1);
        }

    });
    
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });
    
    
    btnNuevo.addEventListener('click', () =>{
        
        console.clear();
        inicializarJuego();

        divCartasJugadores[0].innerHTML = ''
        divCartasJugadores[1].innerHTML = ''

        puntosHTML[0].innerHTML = '0'
        puntosHTML[1].innerHTML = '0'

        btnPedir.disabled = false;
        btnDetener.disabled = false;
        
    
    })

    return {
        nuevoJuego : inicializarJuego
    }

})();



//capturando los elementos del dom para los opciones piedra,papel y tijera
let botonPiedra = document.querySelector(".piedra")
let botonPapel = document.querySelector (".papel")
let botonTijera = document.querySelector (".tijera") 

//capturar los elementos del dom para el tablero de opciones elegidos por el ususario-compu

let manoUsuario = document.querySelector(".mano-usuaria")
let manoCompu = document.querySelector (".mano-computadora")

let puntajeUsuario = document.querySelector (".puntaje-usuaria")
let puntajeComputador = document.querySelector(".puntaje-computadora")

let labelResultado = document.querySelector(".resultado")

let tablero = document.querySelector(".tablero")

let eleccionUsuario = ""
let eleccionComputador = ""

let contUsuario = 0
let contCompu = 0

const swalInicio = () =>{
    swal.fire(
        '¿Jugamos?',
        'Gana el primero que alcance 3 puntos',
        'question'
    )
}
swalInicio()
botonPiedra.onclick = () =>{
    manoUsuario.src = "./assets/piedra_user.png"
    manoCompu.src = "./assets/piedra_computadora.png"
    labelResultado.textContent = "..."
    tablero.classList.add("jugando")
    setTimeout(() =>{
        eleccionUsuario = "piedra"
        manoUsuario = "./assets/piedra_user.png"
       // eleccionComputador(); // son funciones que se nombran mas adelante
       // resultado();// 
        tablero.classList.add("jugando") 
    }, 2000)
}

botonPapel.onclick = () =>{
    manoUsuario.src = "./assets/papel_user.png"
    manoCompu.src = "./assets/papel_computadora.png"
    labelResultado.textContent = "..."
    tablero.classList.add("jugando")
    setTimeout(() =>{
        eleccionUsuario = "papel"
        manoUsuario = "./assets/papel_user.png"
        //eleccionComputador(); // son funciones que se nombran mas adelante
        //resultado();// 
        tablero.classList.add("jugando") 
    }, 2000)
}

botonTijera.onclick = () =>{
    manoUsuario.src = "./assets/tijera_user.png"
    manoCompu.src = "./assets/tijera_computadora.png"
    labelResultado.textContent = "..."
    tablero.classList.add("jugando")
    setTimeout(() =>{
        eleccionUsuario = "tijera"
        manoUsuario = "./assets/tijera_user.png"
        //eleccionComputador(); // son funciones que se nombran mas adelante
        //resultado();// 
        tablero.classList.add("jugando") 
    }, 2000)
}
const resultado = () =>{
    if (eleccionUsuario=="papel"){
          if (eleccionCompu=="papel" ){
             labelResultado.textContent="empate"
          }
          if (eleccionCompu=="tijera"){
            labelResultado.textContent="Gana compu"
            contCompu++
          }
          if (eleccionCompu=="piedra"){
            labelResultado.textContent="Gana usuario"
            contUsuario++
          }
     }
     if (eleccionUsuario=="tijera"){
        if (eleccionCompu=="tijera"){
           labelResultado.textContent="empate"
        }
        if (eleccionCompu=="piedra"){
          labelResultado.textContent="Gana compu"
          contCompu++
        }
        if (eleccionCompu=="papel"){
          labelResultado.textContent="Gana usuario"
          contUsuario++
        }
   }
    if (eleccionUsuario=="piedra"){
        if (eleccionCompu=="piedra"){
       labelResultado.textContent="empate"
        }
        if (eleccionCompu=="papel"){
         labelResultado.textContent="Gana compu"
        contCompu++
        }
        if (eleccionCompu=="tijera"){
            labelResultado.textContent="Gana usuario"
            contUsuario++
            }       
        }
}

const eleccionComputador = () =>{
    let opcionAlAzar = Math.floor(Math.random()*3)
    if ( opcionAlAzar == 0){
       manoCompu.src = "./assets/piedra_computadora.png"
       eleccionCompu="piedra"
    }else if (opcionAlAzar==1){
       manoCompu.src = "./assets/papel_computadora.png"
       eleccionCompu="papel"
    }
    else if(opcionAlAzar==2){
       manoCompu.src = "./assets/tijera_computadora.png"
       eleccionCompu="tijera"
    }
}

const ganador = () =>{
    
}

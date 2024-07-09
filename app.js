let numeroSecreto = 0;  
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ("p",`Acertaste el numero en ${intentos} ${(intentos===1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento ("p","El numero secreto es menor");
        }else{
            asignarTextoElemento ("p","El numero secreto es mayor"); 
        }
        intentos++;
        limpiasCaja();
    }
    return;
}

function limpiasCaja() {
    document.querySelector("#valorUsuario").value = "";
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {
    
    if(listaNumerosSorteados.includes(numeroGenerado)){
       return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero Secreto!");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiasCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
     //inicializar el numero intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}

condicionesIniciales();
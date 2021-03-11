let listaDeClases = ["clase-1", "clase-2", "clase-3", "clase-4", "clase-5", "clase-6","clase-1", "clase-2", "clase-3", "clase-4", "clase-5", "clase-6"]
let listaDeClasesDesordenas = desordenar(listaDeClases);
let listaDeCartas=[];
let contadorDeAciertos = 0;

let $cartas = document.querySelectorAll(".carta");

document.querySelector("button").onclick=comenzar;

function comenzar(){
    manejarRonda();
    contador();
}

function manejarRonda(){
    $cartas.forEach(function(carta,i){        
        carta.classList.add(listaDeClasesDesordenas[i])
        taparCarta(carta)
        carta.onclick=capturarCarta;
    })
}

function capturarCarta(e){
    const $carta = e.target;
    destaparCarta($carta);
    listaDeCartas.push($carta)
    if(listaDeCartas.length===2){
        if(listaDeCartas[0].classList.value===listaDeCartas[1].classList.value){
            setTimeout(ocultar,500,listaDeCartas[0]);
            setTimeout(ocultar,500,listaDeCartas[1]);
            contadorDeAciertos++;
            listaDeCartas=[];
            if(contadorDeAciertos===6){
                document.querySelector("h2").innerText="GANASTE";
                document.querySelector("#number").style.display="none";
                document.querySelector("#empezar-nuevo").classList.remove("oculta");
                document.querySelector("#empezar-nuevo").onclick=comenzarDeNuevo;
                document.querySelector("#tiempo2").classList.remove("oculta");
                document.querySelector("#tiempo").innerText=document.querySelector("#number").innerText;

                

            }
        }   
        else{
            setTimeout(taparCarta,500,listaDeCartas[0])
            setTimeout(taparCarta,500,listaDeCartas[1])
            listaDeCartas=[]
        }
    }
}

function destaparCarta($carta){
    $carta.classList.remove("tapada")
}
function taparCarta($carta){
    $carta.classList.add("tapada")
}

function desordenar(lista){
    lita = lista.sort(function() {return Math.random() - 0.5});
    return lista;
}

function ocultar(carta){
    carta.classList.add("oculta");
}

let tiempo; 
var segundos = 0;
let minutos = 0;
 
function contador(){
    var n = 0;
    var l = document.getElementById("number");
    window.setInterval(function(){
    l.innerHTML = n;
    n++;
    },1000);
}

function comenzarDeNuevo(){
    location.reload();
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;

    if(amigoIngresado === ''){
        alert("Por favor, inserte un nombre")
    }else{
        amigos.push(amigoIngresado);
    }
    limpiarCaja();
    recorrerArreglo();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = ''; 
}

function recorrerArreglo(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML ='';

    for(let i = 0; i < amigos.length; i++){
       listaAmigos.innerHTML += `<li>${amigos[i]}<\li>`
    }
}

function sortearAmigo(){
    listaAmigos.innerHTML ='';
    if(amigos.length === 0){
        alert("Añade a tus amigos");
        
    }else{
        let indiceAleatoreo = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[indiceAleatoreo];
    
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
    }

        
   
}



const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');
const form = document.querySelector('#form');

form.addEventListener('submit', btnOnClick)

function btnOnClick(event) {
    console.log('Escuchando los Clicks');
    event.preventDefault();
    const solucion = (Number(input1.value) + Number(input2.value));
    resultado.innerText = "El resultado es: " + solucion;
}

 
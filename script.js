const testo = document.querySelector('#texto-tarefa');
const recebeLi = document.querySelector('#lista-tarefas');
const botao = document.querySelector('#criar-tarefa');

function area() {

let li = document.createElement('li');
li.innerText = testo.value
 recebeLi.appendChild(li)  
 testo.value = '';
}

botao.addEventListener('click', area);
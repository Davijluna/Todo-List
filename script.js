const testo = document.querySelector('#texto-tarefa');
const recebeLi = document.querySelector('#lista-tarefas');
const botao = document.querySelector('#criar-tarefa');
const botaoApagarTudo = document.querySelector('#apaga-tudo');


function area() {
   let elemento = document.createElement('li');
   elemento.innerText = testo.value
   recebeLi.appendChild(elemento)  
   testo.value = '';
   elemento.addEventListener('click', 
   
   function clicou(){
     elemento.className = 'selecao'; 
   })
}

botao.addEventListener('click', area);


function apagarTudo() {


}
botaoApagarTudo.addEventListener('click',apagarTudo);
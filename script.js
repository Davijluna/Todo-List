const testo = document.querySelector('#texto-tarefa');
const recebeLi = document.querySelector('#lista-tarefas');
const botao = document.querySelector('#criar-tarefa');
const botaoApagarTudo = document.querySelector('#apaga-tudo');


function adicionarLi() {
   const elemento = document.createElement('li');
   elemento.innerText = testo.value
   recebeLi.appendChild(elemento) 
   elemento.className = 'selecao'
   testo.value = '';
   
recebeLi.addEventListener('click', function (event){
    if (event.target.id !== 'lista-tarefas') {
      for (let i = 0; i <recebeLi.children.length; i += 1) {
        if (recebeLi.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        recebeLi.children[i].style.backgroundColor = '';
        }
      }
      event.target.style.backgroundColor = 'rgb(128, 128, 128)'; // fundo cinza na tarefa selecionada
    }
  });
      
    }   



botao.addEventListener('click', adicionarLi);


//   recebeLi.addEventListener('dbclick',function (event){
//         for(let index = 0;index < recebeLi.length;index += 0){
//             if(event.target.classList.contain('selecao')){
//                 event.target.classList.remove('selecao')
                
//             }else{
//                 event.target.classList.add('selecao');
//             }
//        }
//     }
// }
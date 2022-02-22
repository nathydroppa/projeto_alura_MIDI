function tocaSom(seletorAudio) {  //criamos função para que o som seja tocado somente quando solicitado, quando chamar a função deve declarar o id do audio que quer tocar
    
    const elemento = document.querySelector(seletorAudio); //seleciona a tag audio que iremos reproduzir
     
    if(elemento && elemento.localName === 'audio') { //se tentarmos inserir um elemento audio, reproduz o som.
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado'); //se tentarmos inserir um elemento que não for um elemento audio, retorna null e não toca
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
// criamos uma const quando os elementos dentro dela não forem variar ou mudar, ficando mais fácil identificar no cód
//querySelectorAll busca todos os resultados que encontrar no html que utiliza a função informada ()

//for cria uma repetição, declaramos a variável contador p/ compararmos c/ o nº de itens da lista; 
//passamos uma condição para a repetição se encerrar(no caso quando chegar ao final da lista);
//e passamos um incrementador para somar ao final de cada repetição.
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla =  listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    //chamo a lista de teclas,e onclick executa uma função anômima, dentro dela inserimos a função toca som quando botão é clicado acessa todos os id's de usados na tag audio no html e executa 

    tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {  //if fez com que a tecla fique com layout de pressionada somente se apertarmos o espaço
        tecla.classList.add('ativa');
        }
        //seleciona as teclas e adiciona a classe utilizada no css para indicar que a tecla foi pressionada
        //quando utilizarmos a navegação pelo teclado pelo o alura midi
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
        //remove a classe do css que ativa o layout de quando a tecla é pressionada
    }
}

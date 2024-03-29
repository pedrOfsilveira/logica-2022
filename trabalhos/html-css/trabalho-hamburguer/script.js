var lvl = 1; //declara o nível inicial 
var div = document.getElementById('hamburguer'); //declara a div do hamburguer
var childDiv = document.getElementById('pastIngr'); //ingredientes digitados
var executed = false; //declara que a funçao não foi executada
var quantidade, contagem, segundos, ingredientes, certos, posicao, quantCerta, titulo;

function level() {
  document.querySelector('#lvl').innerHTML = 'LVL:'+lvl;
}
level();
function expandText() { //função que adiciona os ingredientes ao hamburguer
  var text = document.getElementById('text').value.toUpperCase();
  if(text[text.length-1] == ' ') {
    var p = document.createElement('p');
    switch (text) {
      case 'TOMATE ':
        p.setAttribute('class','tomate');
        break;
      case 'BURGER ':
        p.setAttribute('class','burger');
        break;
      case 'ALFACE ':
        p.setAttribute('class','alface');
        break;
      case 'QUEIJO ':
        p.setAttribute('class','queijo');
        break;
      case 'CEBOLA ':
        p.setAttribute('class','cebola');
        break;
      case 'PICLES ':
        p.setAttribute('class','picles');
        break;
      case 'OVO ':
        p.setAttribute('class','ovo');
        break;
      default:
        p.setAttribute('class','incorreto');
    }
    if (text == 'APAGAR ') { //método para apagar os ingredientes;
      document.getElementById('text').value  = '';
      childDiv.removeChild(childDiv.children[0]);
    } else {
      p.appendChild(document.createTextNode(text));
      childDiv.insertBefore(p, childDiv.children[0])
      document.getElementById('text').value  = '';
    }
  }
}


function proxPedido() {  //função para passar ao próximo pedido após o fim
  quantidade = []; //quantidade de ingredientes necessários
 
  for (i = 0; i < 7; i++) {
    quantidade.push(Math.ceil(Math.random() * lvl));
  }

  document.querySelector('#pedido').innerHTML = 
  "<h3 id='level'>LVL: "+lvl+"</h3><br>"+
  "<h3 class='tomate2'>TOMATE: "+quantidade[0]+"</h3><br>"+
  "<h3 class='burger2'>BURGER: "+quantidade[1]+"</h3><br>"+
  "<h3 class='alface2'>ALFACE: "+quantidade[2]+"</h3><br>"+
  "<h3 class='queijo2'>QUEIJO: "+quantidade[3]+"</h3><br>"+
  "<h3 class='cebola2'>CEBOLA: "+quantidade[4]+"</h3><br>"+
  "<h3 class='picles2'>PICLES: "+quantidade[5]+"</h3><br>"+
  "<h3 class='ovo2'>OVO: "+quantidade[6]+"</h3>";

  titulo.innerHTML = "Silveira's Hamburgueria";
}


function diminuiTempo() { //função que mostra e diminui os segundos
  document.getElementById('contador').innerHTML = segundos;
  segundos--;
  if (verificarIngredientes() == true) { clearInterval(contagem); }
  else if (segundos < 0) { clearInterval(contagem); executed = false; }
  titulo = document.querySelector('#titulotexto');
  if (verificarIngredientes() == true) {
    titulo.innerHTML = 'VOCÊ GANHOU!!!';
  } else if (segundos == 0) {
    titulo.innerHTML = 'VOCÊ PERDEU, SEU BURRO!';
    while(ingredientes.length > 0) { //reseta os ingredientes
      childDiv.removeChild(childDiv.children[0]);
    }
  }
}

function tempoContagem() { //função que determina a contagem do tempo e começa a função anterior
  if (!executed) {
    ingredientes = document.getElementById('pastIngr').children;
    while(ingredientes.length > 0) { //reseta os ingredientes
       childDiv.removeChild(childDiv.children[0]);
    }
    
    segundos = lvl*2+28;
    contagem = setInterval(diminuiTempo, 1000);
    executed = true;
  }
}


function verificarIngredientes() { //verifica se os ingredientes estão corretos
  certos = [0,0,0,0,0,0,0];
  quantCerta = 0
  posicao = 0;
  ingredientes = document.getElementById('pastIngr').children;
  for (i = 0; i < ingredientes.length; i++) {
    switch (ingredientes[i].className) {
      case 'tomate':
        certos[0]++;
        break;
      case 'burger':
        certos[1]++;
        break;
      case 'alface': 
        certos[2]++;
        break;
      case 'queijo':
        certos[3]++;
        break;
      case 'cebola': 
        certos[4]++;
        break;
      case 'picles': 
        certos[5]++;
        break;
      case 'ovo': 
        certos[6]++;
        break;
    }
    
    if (i != ingredientes.length-1) {
      if (ingredientes[i].className == ingredientes[i+1].className) {
        posicao += 1;
        ingredientes[i].setAttribute('class','incorreto');
      } else {
        posicao += 0;
      }
    }
  }
  for (i = 0; i < certos.length; i++) {
    if (certos[i] == quantidade[i]) {
      quantCerta += 1;
    } 
  }
  if (posicao != 0 || ingredientes.length == 0 || quantCerta != 7) {
    return false;
  } else {
    executed = false;
    return true;
  }
}



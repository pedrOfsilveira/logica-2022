/*
  Banco de palavras organizado por quantidade de letras
  ou
  fácil medio e dificil
  3 bancos, com no mínimo 15 palavras cada

  ou categoria

  NÃO PODE NUMERO!!!!

  _ _ _ _ ou * * * * 

  se a letra estiver na posição certa toUpperCase()
  quantidade de letras certas

  7 tentativas 
  jogar novamente 
  desistir
  mostrar qual a palavra correta
  */

var bd3, bd5, bd7, word, num, lvl, ti, letra, tentativa, certas, rep, again;

bd3 =
  ',vil,fim,fio,mel,bom,paz,dom,som,sol,sal,lar,bar,dar,mar,dor,ato,lua,sua,boa,bem,mal,mau,mil,meu,teu,seu';
bd5 =
  ',termo,nobre,afeto,honra,culto,forte,ordem,feliz,servo,ontem,forma,lugar,senil,ritmo,falso,tempo,ideal';

bd7 =
  ',virtude,firmeza,abusivo,envolta,oscilar,diverso,aumento,imaturo,abduzir,fortuna,sotaque,estigma,cordial,aspecto,coragem'

do {

  tentativa = 7;
  certas = 0;
  rep = 0;
  

  do {
    lvl = parseInt(
      prompt(
        'Escolha a dificuldade:\n1. Fácil (3 letras)\n2. Médio (5 letras)\n3. Difícil (7 letras)'
      )
    );
  } while (lvl != 1 && lvl != 2 && lvl != 3);

  switch (lvl) {
    case 1:
      num = Math.floor(Math.random() * 79);
      word = bd3.substr(bd3.indexOf(',', num) + 1, 3);
      break;
    case 2:
      num = Math.floor(Math.random() * 86);
      word = bd5.substr(bd5.indexOf(',', num) + 1, 5);
      break;
    case 3:
      num = Math.floor(Math.random() * 106);
      word = bd7.substr(bd7.indexOf(',', num) + 1, 7);
      break;
  }

  ti = '_ '.repeat(word.length) + ' ' + certas; // Tracejado inicial

  do {
    do {
      letra = prompt(
        'A palavra é:\n' +
          ti +
          '\n\nNúmero de letras certas: ' +
          (certas-rep) +
          '\nTentativas restantes:' +
          tentativa +
          '\nTente acertar a palavra!\n\nPara desistir digite 0.'
      );
    } while (
      letra.length != word.length &&
      letra != 0 &&
      letra.toUpperCase() != word.toUpperCase()
    );

    tentativa--;
    ti += '\n';
    certas = 0;
    rep = 0;
    
    for (i = 0; i < word.length; i++) {
      if (word.charAt(i).toLowerCase() == letra.charAt(i).toLowerCase()) {
        ti += letra.charAt(i).toUpperCase() + ' ';
        certas++;
      } else {
        ti += letra.charAt(i).toLowerCase() + ' ';
        if (word.indexOf(letra.charAt(i)) !== -1) {
          certas++;
        }
      }
      for (c = 1; c <= word.length; c++) {
        if (letra[i] === letra[i+c] && word.indexOf(letra[i]) !== -1 && letra[i+c] !== undefined && 
        letra.indexOf(letra[i]) === i) {
          rep++;
        }
      }
    }
    

    ti += ' ' + certas-rep;
  } while (
    letra.toUpperCase() != word.toUpperCase() &&
    tentativa != 0 &&
    letra != 0
  );

  if (letra.toUpperCase() == word.toUpperCase()) {
    alert('Você acertou!\n A palavra era: ' + word);
  } else if (tentativa == 0) {
    alert('Você errou!\n A palavra certa era: ' + word);
  } else if (letra == 0) {
    alert('Desistiu? Tão rápido??😨️😨️😨️\nA palavra certa era: ' + word);
  }
  do { again = prompt('Deseja jogar novamente?\n1. Sim\n0. Não') } while (again != 1 && again != 0);
} while (again == 1);
var palavra, spaced, palavrahid, chute, erro, In, Out, aux;

palavra = Math.ceil(Math.random()*50);
In = '';
Out = ''
erro = 0;
spaced = '';
aux = ''

switch (palavra) {
  case 1: palavra = 'abobora'; break;
  case 2: palavra = 'pena'; break;
  case 3: palavra = 'jogo'; break;
  case 4: palavra = 'hipoteticamente'; break;
  case 5: palavra = 'abstrato'; break;
  case 6: palavra = 'foco'; break;
  case 7: palavra = 'socrates'; break;
  case 8: palavra = 'conselho'; break;
  case 9: palavra = 'concerto'; break;
  case 10: palavra = 'yakisoba'; break;
  case 11: palavra = 'sopa'; break;
  case 12: palavra = 'feira'; break;
  case 13: palavra = 'abdomen'; break;
  case 14: palavra = 'elipse'; break;
  case 15: palavra = 'rachadura'; break;
  case 16: palavra = 'academicamente'; break;
  case 17: palavra = 'cientifico'; break;
  case 18: palavra = 'acampamento'; break;
  case 19: palavra = 'magnesio'; break;
  case 20: palavra = 'heterocromia'; break;
  case 21: palavra = 'fagulha'; break;
  case 22: palavra = 'centeio'; break;
  case 23: palavra = 'malfeitor'; break;
  case 24: palavra = 'maquiavelico'; break;
  case 25: palavra = 'campones'; break;
  case 26: palavra = 'confucio'; break;
  case 27: palavra = 'maleficio'; break;
  case 28: palavra = 'beneficio'; break;
  case 29: palavra = 'jeff bezos'; break;
  case 30: palavra = 'medicamento'; break;
  case 31: palavra = 'compartimento'; break;
  case 32: palavra = 'literatura'; break;
  case 33: palavra = 'romance'; break;
  case 34: palavra = 'telefonia'; break;
  case 35: palavra = 'ion'; break;
  case 36: palavra = 'epifania'; break;
  case 37: palavra = 'inibidor'; break;
  case 38: palavra = 'axioma'; break;
  case 39: palavra = 'elevador'; break;
  case 40: palavra = 'memoria'; break;
  case 41: palavra = 'filosofia'; break;
  case 42: palavra = 'conhecimento'; break;
  case 43: palavra = 'plataforma'; break;
  case 44: palavra = 'comite'; break;
  case 45: palavra = 'independencia'; break;
  case 46: palavra = 'armazenamento'; break;
  case 47: palavra = 'genetica'; break;
  case 48: palavra = 'minoxidil'; break;
  case 49: palavra = 'enfase'; break;
  case 50: palavra = 'estabelecimento'; break;
}

for (i = 0; i <= palavra.length; i++) {
  spaced += palavra.charAt(i) + ' '
}

palavrahid = '_ '.repeat(palavra.length);
do {
  do {
    chute = prompt(palavra+palavrahid + '\n' + Out + '\nChute: ').toLowerCase();
  } while (Out.indexOf(chute) != -1 || In.indexOf(chute) != -1);
  for (aux = '', i = 0; i < palavra.length; i++) {
    if (palavra.indexOf(chute) != -1) {
      In += chute;
      if (In.indexOf(palavra.charAt(i)) != -1) {
        aux += palavra.charAt(i) + ' ';
      } else if (palavra.charAt(i) != chute) {
        if (palavra.charAt(i) == ' ') {
          aux += ' ';
        } else {
          aux += '_ ';
        }
      } else if (palavra.charAt(i) == chute) {
        aux += palavra.charAt(i) + ' ';
      }
      palavrahid = aux;
    } else {
      alert('A letra ' + chute + ' não foi encontrada na palavra!');
      erro++;
      Out += chute + ' ';
      break;
    } 
  }
} while (erro <= 10 || aux == spaced);


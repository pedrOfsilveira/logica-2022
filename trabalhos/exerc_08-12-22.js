/* 
1. Escreva um programa que codifica palavras da língua inglesa em Pig Latin. O Pig Latin é uma
forma de linguagem codificada utilizada por diversão. Existem muitas variações nos métodos
utilizados para formar palavras em Pig Latin. Para simplificar, utilize o seguinte método.
Para traduzir uma palavra em inglês para uma palavra em Pig Latin, coloque a primeira letra
da palavra em inglês no final da palavra e adicione as letras “ay”. Assim, a palavra “jump” torna-se
“umpjay”, a palavra “the” torna-se “hetay” e a palavra “computer” torna-se “omputercay”. 
*/  

var word, pigword;

word = prompt('Digite a palavra: ');

pigword = word.substring(1) + word.charAt(0) + 'ay';

console.log(pigword);

/* 
2. Escreva um programa que leia uma palavra ou frase e também leia uma letra. O programa deve
mostrar quantas vezes a letra aparece na palavra ou frase.
*/

var string = prompt('Digite a string em que a letra deve ser contada: ').toUpperCase();
var letter = prompt('Digite a letra a ser contada: ').toUpperCase();
var quant = 0;

for (i = 0; i < string.length; i++) {
  if (string.charAt(i) == letter) { quant += 1; }
}
console.log('A letra '+letter.toUpperCase()+' aparece '+quant+' vezes na string.');

/* 
3. Escreva um programa que leia uma palavra sem acentos e cedilha e mostre essa palavra em
letras minúsculas, com a primeira letra em maiúsculo.
*/

var word = prompt('Digite a palavra: ').toUpperCase();
var acentos = 'ÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÄËÏÖÜÇ^´`¨~';
var acentosNAO = 'AEIOUAEIOUAOAEIOUAEIOUC     ';

for (i = 0; i < word.length; i++) {
  for (l = 0; l < acentos.length; l++) {
    if (word.charAt(i) == acentos.charAt(l)) {
      word = word.replace(word.charAt(i),acentosNAO.charAt(l));
    }
  }
}

console.log(word.toUpperCase().charAt(0) + word.toLowerCase().substring(1));

/* 
4. Escreva um programa que leia o código DDD e um número de telefone e monte uma String no
formato:
(DD) NNNN-NNNN
em que D representa um dígito do DDD e N um dígito do número de telefone.
*/

var ddd, tel;

ddd = prompt('Digite o DDD: ');
tel = prompt('Digite o telefone: ');

console.log('('+ddd+') '+tel.charAt(0)+' '+tel.substr(1,4)+'-'+tel.substr(5,4));

/*
5. Escreva um programa que leia um String contendo um número de telefone no formato
(DD) DDDD-DDDD
Em que D representa um dígito do número (o que está entre parênteses é o número do DDD). O
programa deve verificar se o número está escrito de forma correta (pode haver um número de
espaços em branco qualquer entre o número de DDD e o número do telefone. Caso o número não
tenha sido digitado corretamente, o programa deve mostrar uma mensagem “Número de telefone
incorreto.”. Caso contrário, o programa deve colocar o número do DDD em uma variável int e o
número do telefone em outra variável int. O conteúdo de cada uma das variáveis deve ser mostrado
na tela, separadamente.
*/

var tel, space, wrong, ddd, dddend, num;

tel = prompt('Digite o  número de telefone: ')
space = 0;
wrong = 0;
ddd = '';
num = '';

for (i = 0; i < tel.length; i++) {
  if (isNaN(tel.charAt(i)) && tel.charAt(i) != ' ') {
     wrong = 1;
  } else if (isNaN(tel.charAt(i)) == false && tel.charAt(i) != ' ' && ddd.length < 2) { 
    ddd += tel.charAt(i); 
    dddend = i;
  } else if (i > dddend && isNaN(tel.charAt(i)) == false && tel.charAt(i) != ' ') {
    num += tel.charAt(i);
    if (num.length > 9) { wrong = 1; }
  }
}

parseInt(num); parseInt(ddd);

if (wrong == 1) {
  console.log('Número de telefone incorreto. ');
} else {
  console.log('DDD: '+ddd+'\nNúmero: '+num);
}

/*
6. Escreva um programa que é capaz de gerar o plural de algumas palavras em inglês. O programa
deve ler uma palavra, convertê-la para letras minúsculas, e mostrar seu plural na tela. Utilize as
seguintes regras para o plural:
• A regra geral para o plural é acrescentar um 's' no final da palavra. Exemplos:
◦ book = books
◦ girl = girls
◦ day = days
• Para palavras terminadas em 'o', 'ch', 'sh', 'ss', 'x' e 'z', forma-se o plural acrescentando 'es'
ao final da palavra. Exemplos:
◦ tomato = tomatoes
◦ church = churches
◦ brush = brushes
◦ glass = glasses
◦ box = boxes
◦ buzz = buzzes
• Palavras terminadas em 'y', precedidos de consoante, perdem o 'y' e recebem 'ies' no final.
Exemplos:
◦ country = countries
◦ family = families
*/

var word, end;

word = prompt('Type in the word that you want to pluralize: ').toLowerCase();
end = word.substring(word.length - 2, word.length);
if ( end == 'es' || end == 'sh' || end == 'ss') {
  word += 'es';
} else {
  switch (word.charAt(word.length - 1)) {
    case 'o':
    case 'x':
    case 'z':
      word += 'es';
      break;
    case 'y':
      word = word.substring(0, word.length - 1) + 'ies';
      break;
    default:
      word += 's';
  }
}
console.log(word);

/*
7. As datas são impressas em vários formatos comuns. Dois dos formatos mais comuns são:
25/04/1955 e 25 de abril de 1955
Escreva um programa que lê uma data no primeiro formato (como String) e mostre essa data no
segundo formato.
*/

var data, dia, mes, ano;

data = prompt('Digite a data no dormado DD/MM/AAAA: ');

dia = data.substring(0,data.indexOf('/'));
mes = data.substring(data.indexOf('/')+1, data.lastIndexOf('/'));
ano = data.substring(data.lastIndexOf('/')+1);

switch (mes.trim()) {
  case '01':
    mes = 'janeiro';
    break;
  case '02':
    mes = 'fevereiro';
    break;
  case '03':
    mes = 'março';
    break;
  case '04':
    mes = 'abril';
    break;
  case '05':
    mes = 'maio';
    break;
  case '06':
    mes = 'junho';
    break;
  case '07':
    mes = 'julho';
    break;
  case '08':
    mes = 'agosto';
    break;
  case '09':
    mes = 'setembro';
    break;
  case '10':
    mes = 'outubro';
    break;
  case '11':
    mes = 'novembro';
    break;
  case '12':
    mes = 'dezembro';
    break;
}

console.log(dia.trim()+' de '+mes+' de '+ano.trim()+'.');


/* 
8. Escreva um programa que leia uma data no formato DD/MM/AAAA como String e diga se a data
é válida ou não. Uma data válida deve ter tamanho 10, possuir dígitos numéricos para D, M e A e
conter /, - ou um ponto final separando dia, mês e ano. O valor do mês deve estar entre 1 e 12 e o
dia deve ser um número entre 1 e o número máximo de dias do mês.
*/

var data, dia, mes, ano, wrong;

wrong = 0;
data = prompt('Digite a data no formato DD/MM/AAAA: ');

dia = data.substring(0,2);
mes = data.substring(3,5);
ano = data.substring(6);

for (i = 2; i <= 5; i += 3) {
  switch (data.charAt(i)) {
    case '/': case '-': case '.':
      break;
    default:
      wrong = 1;
  }
}

if (data.length != 10) { wrong = 1; }
else if (mes < 1 || mes > 12) { wrong = 1;}
switch (mes) {
  case '01':
    mes = '31';
    break;
  case '02':
    mes = '28';
    break;
  case '03':
    mes = '31';
    break;
  case '04':
    mes = '30';
    break;
  case '05':
    mes = '31';
    break;
  case '06':
    mes = '30';
    break;
  case '07':
    mes = '31';
    break;
  case '08':
    mes = '31';
    break;
  case '09':
    mes = '30';
    break;
  case '10':
    mes = '31';
    break;
  case '11':
    mes = '30';
    break;
  case '12':
    mes = '31';
    break;
}
if (dia < 1 || dia > mes) { wrong = 1; }



/* 
9. Escreva um programa que verifique se uma string é ou não um palíndromo (ou seja, se o inverso
da cadeia é igual a ela).
Exemplos:
RADAR
LUZ AZUL
ROMA ME TEM AMOR
*/

var str, rev;
rev = '';

str = prompt('Digite a palavra: ');
for (i = str.length - 1; i >= 0; i--) {
  if (str.charAt(i) != ' ') { 
    rev += str.charAt(i); 
  }
} 

if (str.toUpperCase().replace(/ /g, '') == rev.toUpperCase()) { console.log(' A palavra é um palíndromo. '); }
else { console.log('A palavra não é um palíndromo. '); }

/*
10. Escreva um programa que, a partir de um nome informado pelo usuário, exiba suas iniciais. As
iniciais são formadas pela primeira letra de cada nome, sendo que todas deverão aparecer em
maiúsculas na saída do programa. Note que os conectores e, do, da, dos, das, de, di, du não são
considerados nomes e, portanto, não devem ser considerados para a obtenção das iniciais. As
iniciais devem ser impressas em maiúsculas, ainda que o nome seja entrado todo em minúsculas.
Exemplos:
Maria das Graças Pimenta => MGP
João Carlos dos Santos => JCS
José da Silva => JS
Pedro Pereira Teixeira => PPT
*/

var nome, inicial;
nome = ' ';
nome += prompt('Digite um nome completo: ').toLowerCase();
inicial = '';

for (i = 0; i < nome.length; i++) {
  if (nome.indexOf(' e ') != -1) { nome = nome.replace(' e ', ' '); }
  else if (nome.indexOf(' do ') != -1) { nome = nome.replace(' do ', ' '); }
  else if (nome.indexOf(' da ') != -1) { nome = nome.replace(' da ', ' '); }
  else if (nome.indexOf(' dos ') != -1) { nome = nome.replace(' dos ', ' '); }
  else if (nome.indexOf(' de ') != -1) { nome = nome.replace(' de ', ' '); }
  else if (nome.indexOf(' di ') != -1) { nome = nome.replace(' di ', ' '); }
  else if (nome.indexOf(' du ') != -1) { nome = nome.replace(' du ', ' '); }
}

for (i = 0; i < nome.length; i++) {
  if(nome.charAt(i) == ' ') {
    inicial += nome.charAt(i+1);
  }
}


console.log(inicial.toUpperCase());


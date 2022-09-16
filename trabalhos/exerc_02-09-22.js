var num = prompt('Digite a palavra: ').toUpperCase();

for (i = 0; i < num.length; i++) {
  switch (num[i]) {
    case 'A':
    case 'B':
    case 'C':
      num = num.replaceAll(num[i], '2');
      break;
    case 'D':
    case 'E':
    case 'F':
      num = num.replaceAll(num[i], '3');
      break;
    case 'G':
    case 'H':
    case 'I':
      num = num.replaceAll(num[i], '4');
      break;
    case 'J':
    case 'K':
    case 'L':
      num = num.replaceAll(num[i], '5');
      break;
    case 'M':
    case 'N':
    case 'O':
      num = num.replaceAll(num[i], '6');
      break;
    case 'P':
    case 'Q':
    case 'R':
    case 'S':
      num = num.replaceAll(num[i], '7');
      break;
    case 'T':
    case 'U':
    case 'V':
      num = num.replaceAll(num[i], '8');
      break;
    case 'W':
    case 'X':
    case 'Y':
      num = num.replaceAll(num[i], '9');
      break;
  }
}
console.log(num);

var seq, str, abc, decifrada;
decifrada = '';

do {
  seq = prompt('Digite a sequência para decifrar a frase: ').toLowerCase();
} while (seq.length != 26);

abc = 'abcdefghijklmnopqrstuvwxyz';
str = prompt('Digite a frase a ser decifrada: ').toLowerCase();

for (i = 0; i < str.length; i++) {
  decifrada += str[i].replace(str[i], seq[abc.indexOf(str[i])]);
}
console.log(decifrada);

/*1. Leia uma sequência de N números inteiros e mostre essa sequência ao contrário, no final de
sua execução. O valor de N deve ser informado pelo usuário. */

var N, num, invNum;
num = [];
invNum = [];

N = parseInt(prompt('Digite o tamanho da sequência: '));

for (i = 0; i < N; i++) {
  num[i] = parseInt(prompt('Digite um número inteiro: '));
}
for (i = 0, j = num.length; i < num, j >= 0; i++, j--) {
  invNum[i] = num[j];
}
console.log(invNum.join(', ').substring(1));

/* 2. Leia a pontuação de N times de um campeonato de futebol. O programa deve mostrar, ao final,
qual a pontuação dos campeões, bem como mostrar quantos times dividiram o título. */

var N, score, champ, champQuant;

score = [];
champ = 0;
champQuant = 0;

N = parseInt(prompt('Digite a quantidade de times: '));

for (score = [], i = 1; i <= N; i++) {
  score[i] = parseInt(prompt('Digite a pontuação do time ' + i + ': '));
}

for (i = 0; i < score.length; i++) {
  if (score[i] > champ) {
    champ = score[i];
  }
}
for (i = 0; i < score.length; i++) {
  if (score[i] == champ) {
    champQuant++;
  }
}

console.log(
  'A pontuação dos campeões é: ' +
    champ +
    '.\n O número de campeões é ' +
    champQuant +
    '.'
);

/* 3. Peça ao usuário 10 números, calcule e mostre a média desses 10 números e mostre ainda
quantos, desses números, são maiores que a média. */

var num, media, acimaMedia;

num = [];
media = 0;
acimaMedia = 0;

for (i = 0; i < 10; i++) {
  num[i] = parseInt(prompt('Digite um número: '));
  media += num[i];
}

media /= 10;
for (i = 0; i < 10; i++) {
  if (num[i] > media) {
    acimaMedia++;
  }
}

console.log(
  'A média entre eles é ' +
    media +
    '.\nHá ' +
    acimaMedia +
    ' números acima da média.'
);

/* 4. Leia um vetor com dez números reais, calcule e mostre a quantidade de números negativos e a
soma dos números positivos desse vetor. */

var vet, negative, sumpositive;

vet = [];
negative = 0;
sumpositive = 0;

for (i = 0; i < 10; i++) {
  vet[i] = parseFloat(prompt('Digite um número real: '));
  if (vet[i] < 0) {
    negative++;
  } else {
    sumpositive += vet[i];
  }
}

console.log(
  'O vetor tem ' +
    negative +
    ' números negativos e a soma de seus positivos é ' +
    sumpositive +
    '.'
);

/* 5. Leia um vetor com 15 posições, calcule e mostre:
a) O maior elemento do vetor e em que posição esse elemento se encontra;
b) O menor elemento do vetor e em que posição esse elemento se encontra.
*/

var vet, maior, menor;

maior = 0;
vet = [];

for (i = 0; i < 15; i++) {
  vet[i] = parseInt(prompt('Digite um número: '));
}

menor = vet[1];

for (i = 0; i < vet.length; i++) {
  if (vet[i] > maior) {
    maior = vet[i];
  } else if (vet[i] < menor) {
    menor = vet[i];
  }
}
console.log('O maior elemento é ' + maior + ' e o menor é ' + menor + '.');

/* 6. Leia 2 vetores de 10 posições e some os elementos de mesma posição e armazene o resultado
em um terceiro vetor (também de 10 posições).
*/

var v1, v2, v3;

for (v1 = [], i = 0; i < 10; i++) {
  v1[i] = parseFloat(prompt('Digite o número a ser armazenado na posição '+i+': '));
}
for (v2 = [], i = 0; i < 10; i++) {
  v2[i] = parseFloat(prompt('Digite o número a ser armazenado na posição ' + i + ': '));
}
for (v3 = [], i = 0; i < 10; i++) {
  v3[i] = v1[i] + v2[i];
}

/* 7. Leia um vetor de 20 posições e uma variável A. A seguir, armazene em um outro vetor o produto
da variável A pelo primeiro vetor.
*/

var v1, v2, A;

for (v1 = [], i = 0; i < 20; i++) {
  v1[i] = parseFloat(prompt('Digite o número a ser armazenado na posição ' + i + ': '));
}
A = parseFloat(prompt('Digite um valor para a variável A: '));

for(v2 = [], i = 0; i < 20; i++) {
  v2[i] = v1[i] * A;
}

/* 8. Um time de basquete possui 12 jogadores. Elabore um programa que leia dois vetores NOME e
ALTURA, calcule e imprima o nome do jogador mais alto e a sua altura.
*/

var NOME, ALTURA, ALTO, NOMEALTO;

ALTO = 0;

for(NOME = [], ALTURA = [], i = 0; i < 12; i++) {
  NOME[i] = prompt('Digite o nome do jogador: ')
  ALTURA[i] = parseInt(prompt('Digite a altura (em cm) do jogador: '));
}

for(i = 0; i < 12; i++) {
  if(ALTURA[i] > ALTO) { ALTO = ALTURA[i]; NOMEALTO = NOME[i]}
}

console.log('O jogador mais alto é '+NOMEALTO+', e sua altura é de '+ALTO);

/* 9. Dados três vetores reais de 5 posições, leia estes vetores (usando uma estrutura de repetição),
calcule a expressão ((vetor1 * vetor3) / vetor2 ), utilizando os valores da mesma posição,
armazenando em um quarto vetor, também de números reais de 5 posições. No final, imprima os
números do quarto vetor.  
*/

var v1,v2,v3,v4;

for(v1 = [], i = 0; i < 5; i++) {
  v1[i] = parseFloat(prompt('Digite um número real: '));
}
for (v2 = [], i = 0; i < 5; i++) {
  v2[i] = parseFloat(prompt('Digite um número real: '));
}
for (v3 = [], i = 0; i < 5; i++) {
  v3[i] = parseFloat(prompt('Digite um número real: '));
}

for (v4 = [], i = 0; i < 5; i++) {
  v4[i] = (v1[i] * v3[i]) / v2[i];
  console.log(v4[i]);
}

/* 10. Leia um conjunto de 30 valores e os coloque em 2 vetores conforme estes valores forem pares
ou ímpares. O tamanho dos vetores é de 15 posições. Se algum vetor estiver cheio, escrever uma
mensagem informando que o vetor já está cheio. Terminada a leitura, escrever o conteúdo dos
dois vetores.
*/

var val, par, impar;
par = [];
impar = [];

for (i = 0; i < 30; i++) {
  val = parseFloat(prompt('Digite um valor: '));
  if(val%2 === 0 && par.length < 15) { par.push(val);}
  else if (val%2 === 0 && par.length == 15) { console.log('O vetor par está cheio!'); }

  else if (val%2 === 1 && impar.length < 15) { impar.push(val); }
  else if (val%2 === 1 && impar.length == 15) { console.log('O vetor ímpar está cheio!'); }
}
console.log(par);
console.log(impar);

/* 11. Leia um vetor de 20 posições e mostre- o. Em seguida, troque o primeiro elemento com o
último, o segundo com o penúltimo, o terceiro com o antepenúltimo, e assim sucessivamente.
Mostre o novo vetor depois da troca.
*/

var vet, vetinv;
vetinv = [];
for(i = 0, vet = []; i < 20; i++) {
  vet[i] = prompt('Digite um valor: ');
}

for(i = 0, c = (vet.length - 1); i < vet.length; i++, c--) {
  vetinv[c] = vet[i];
}
console.log(vetinv);

/* 12. Leia um vetor A de 6 elementos contendo o gabarito da Mega Sena. A seguir, leia um vetor B
de 10 elementos contendo uma aposta. Escreva quantos pontos fez o apostador, e se ele fez a
sena (6 acertos), a quina (5 acertos) ou a quadra (4 acertos).
*/
var A, B, acertos;
A = [];
B = [];
acertos = 0;
for(i = 0; i < 6; i++) {
  A[i]= parseInt(prompt('Digite os 6 números do gabarito:\n Número '+(i+1)+':'));
}
for (i = 0; i < 10; i++) {
  B[i]= parseInt(prompt('Digite os 10 números da aposta:\n Número '+(i+1)+':'));
}

for(i = 0; i < 10; i++) {
  for(c = 0; c < A.length; c++) {
    if (B[i] == A[c]) { acertos++; }
  }
}
if (acertos >= 6) { console.log('Sena! '+acertos + ' acertos.');}
else if(acertos >= 5) { console.log('Quina! '+acertos + ' acertos.');}
else if(acertos >= 4) { console.log('Quadra! '+acertos + ' acertos.');}
else if(acertos < 4) { console.log(acertos + ' acertos.');}


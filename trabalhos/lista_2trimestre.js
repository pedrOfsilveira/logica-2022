/*
 Lista 2º Trimestre ----



Comando Switch:

Sintaxe: 

switch (variavel) {
  case n1:
    comandos;
    break;
  case n2:
    comandos;
    break;
  default:
    comandos;
*/

//exemplo 1
var dia;
var n = parseInt(prompt('Digite um número de 0 a 6: '));

switch (n) {
  case 0:
    dia = 'Domingo';
    break;
  case 1:
    dia = 'Segunda-Feira';
    break;
  case 2:
    dia = 'Terça-Feira';
    break;
  case 3:
    dia = 'Quarta-Feira';
    break;
  case 4:
    dia = 'Quinta-Feira';
    break;
  case 5:
    dia = 'Sexta-Feira';
    break;
  case 6:
    dia = 'Sábado';
    break;
}
alert(dia);

//exemplo 2
var n = parseInt(prompt('Digite um número de 0 a 6: '));

switch (n) {
  case 6:
    alert('Hoje é sábado!');
    break;
  case 0:
    alert('Hoje é domingo!');
    break;
  default:
    alert('Não é fim de semana!');
}

//exemplo 3
var d = parseInt(prompt('Digite um número de 0 a 6: '));

switch (d) {
  case 1:
  case 2:
  case 3:
  default:
    alert('Não é fim de semana!');
    break;
  case 4:
  case 5:
    alert('Perto do fim de semana!');

    break;
  case 0:
  case 6:
    alert('Fim de semana!!!!');
}

//calculadora

var n1, n2, op, r;

n1 = Number(prompt('Digite o primeiro número: '));
n2 = Number(prompt('Digite o segundo número: '));
op = String(prompt('Digite a operação desejada:\n(+,-,*,/,**,🍌)'));

switch (op) {
  case '+':
    r = n1 + n2;
    break;
  case '-':
    r = n1 - n2;
    break;
  case '*':
    r = n1 * n2;
    break;
  case '/':
    r = n1 / n2;
    break;
  case '**':
    r = n1 ** n2;
    break;
  case '🍌':
    r = '🍌';
    break;
  default:
    alert('Escolha uma operação válida.');
}
alert(r);

//mesedias

var mes, dias;

do {
  mes = parseInt(prompt('Digite o mês desejado: (núm. de 1 a 12)'));
} while (mes < 1 || mes > 12);
switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dias = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dias = 30;
    break;
  case 2:
    dias = 28;
    break;
  default:
    alert('Digite um mês válido.');
}
alert('O número de dias é ' + dias);

/*
var idade = 19
var categoria = idade >= 18 ? "Adulto : "Juvenil";
alert(categoria);

++incremento
--decremento

  x = y : x = y
  x += y : x = x + y
  x -= y : x = x - y
  x *= y : x = x * y
  x /= y : x = x / y
  x %= y : x = x % y

exemplos

var x = 10;
x += 5;

txt1 = "lógica ";
txt1 += "da programação";

x = 5 + 5; // 10
y = "5" + 5 // "55"



Estruturas de Repetição

  WHILE

  var n = 1;
  while (n <= 5) {
    console.log(n); 
    n++;
  }
*/

var resp = 'S';

while (resp == 'S') {
  n = Math.ceil(Math.random() * 10);
  alert('O número sorteado foi: ' + n);
  resp = String(prompt('Você deseja sotear outro número? S/N'));
}
alert('FIM!');

//n par de 1 a 20

var n = 1;
var s = 0;

while (n <= 20) {
  if (n % 2 == 0) {
    console.log(n);
    s += n;
  }
  n++;
}
console.log(s);

//soma impares de 1 a 20

var n = 1;
var s = 0;

while (n <= 20) {
  if (n % 2 != 0) {
    console.log(n);
    s += n;
  }
  n++;
}
console.log(s);

//pares e impares

var p = '';
var i = '';
var n = 0;

while (n <= 10) {
  if (n % 2 == 0) {
    p += n + ', ';
  } else {
    i += n + ', ';
  }
  n++;
}
console.log('Os pares são: ' + p);
console.log('Os ímpares são: ' + i);

//soma dez numeros

//1.

var i, n, s;
i = 1;
s = 0;
while (i <= 10) {
  n = Number(prompt('Digite o ' + i + 'º número: '));
  s += n;
  i++;
}
console.log('A soma dos dez números é: ' + s);

//2.

var i, s, sq, m, n;

s = 0;
i = 0;
sq = 0;
n = -1;

while (n < 0) {
  n = parseInt(prompt('Digite o número: '));
}

while (i <= n) {
  sq += n ** 2;
  s += i;
  i++;
}
m = s / n;

console.log('O somatório é: ' + s);
console.log('A soma dos quadrados é: ' + sq);
console.log('A média entre eles é: ' + m);

//3.

var n;

n = 1;
while (n >= 0) {
  n = Number(prompt('Digite um número: '));
  console.log('O quadrado do número é: ' + n ** 2);
}

//4.

var x, r;

x = 1;

while (x != 0) {
  x = Number(prompt('Digite um número para X: '));
  r = x ** 2 - 5 * x + 6;
  console.log('O resultado da função é: ' + r);
}

/* 5. Calcular o faturamento total mensal de um armazém, sabendo-se que, para cada uma
  das mercadorias com que o armazém trabalha dispões-se dos seguintes dados:
    - O nome da mercadoria;
    - O seu preço unitário;
    - A quantidade total vendida no mês.
  O faturamento total do armazém será calculado somando-se o total faturado por cada 
  mercadoria, que é igual a quantidade vendida da mercadoria vezes seu preço unitário.
  O número de mercadorias comercializadas pelo armazém deve ser informado pelo usuário. */

var c, qtd_m, nome, valor, qtd, tot, fat;

c = 1 ;
fat = 0;
tot = 0;
qtd_m = Number(prompt('Digite a quantidade de mercadorias: '));

while (c <= qtd_m) {
  nome = String(prompt('Digite o nome da mercadoria: '));
  valor = Number(prompt('Digite o valor unitário da mercadoria: '));
  qtd = Number(prompt('Digite a quantidade vendida: '));
  tot = valor*qtd;
  fat += tot;  
  c++;
}
console.log('O faturamento total do armazém é de R$'+fat);


/*

  do... while

  do {
    comando1;
    comando2;
  } while (condição);
*/

do {
  var n = Math.ceil(Math.random()*10);
  alert('O número sorteado foi '+n);
  var resp = parseInt(prompt('Deseja sortear novamente?\n1.SIM\n2.NÃO'));
}while (resp == 1);

/*
 
  for

  for( inic; condição; incremento) {
    comandos;
  }
*/

for(c = 1; c <= 5; c++) {
  console.log(c);
}

//6. Apresentar os quadrados dos números inteiros de 15 a 200

for(i = 15; i <= 200; i++) {
  console.log(i**2);  
}

/*
  7.  Apresentar  os  resultados  de uma  tabuada  de  um  número  qualquer,  a  qual  deve  ser mostrada 
  no seguinte formato, considerando como exemplo o
  fornecimento do número 2:
  2 x 1 = 2
  2 x 2 = 4
  2 x 3 = 6
  (...)
  2 x 10 = 20
*/

var n

n = parseInt(prompt('Digite um número inteiro: '));

for(i = 1; i <= 10; i++) {
  console.log(n+' x '+i+' = '+(n*i));
}

//8. Apresentar o somatório dos valores pares existentes na faixa de 1 até 500.

var s;

s = 0;

for(i = 1; i <= 500; i++) {
  if (i%2 == 0) {
    s += i;
  }
}
console.log(s);    

//9. Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20.


for(i = 1; i <= 20; i++) {
  if (i%2 != 0) {
    console.log(i);
  }
}  

//10. Apresentar os resultados das potências de 3, variando o expoente de 0 (zero) até 15.

for(i = 0; i <= 15; i++) {
    console.log(3**i);
}  

/*
  11. Calcular N! (fatorial de N), sendo que o valor de N é fornecido pelo usuário e sabendo que:
  N! = 1 x 2 x 3 x ... x (N - 1) x N
  0! = 1, por definição.
*/

var n, f;

f = 1;
n = Number(prompt('Digite o valor de N: '));
for(i = 1; i <= n; i++) {
  if(n != 0) {
    f *= i;
  } else {
    f = 1;  
  }
}
console.log(n+'! = '+f);

/*
  12. Sendo H = 1 + 1/2 + 1/3 + 1/4 + ... + 1/N, 
  calcular o número H. O número N é fornecido pelo 
  usuário.
*/

var h, n;

h = 1;
n = Number(prompt('Digite o valor de N: '));
for(i = 1; i <= n; i++) {
  h += 1/i;
}
console.log('H = '+h);





  
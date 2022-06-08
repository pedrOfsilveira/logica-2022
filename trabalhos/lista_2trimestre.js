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

//5.

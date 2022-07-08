//1. Calcular o MDC (maximo divisor comum) entre 2 número:

var n1, n2, mdc;

n1 = parseInt(prompt('Digite o primeiro número: '));
n2 = parseInt(prompt('Digite o segundo número: '));

for (var i = 1; i <= Math.max(n1,n2); i++) {
  if (n1%i == 0 && n2%i == 0) { mdc = i; }
}

console.log('O MDC entre '+n1+' e '+n2+' é: '+mdc);

//2. Calcular o N-ésimo termo da sequência: 1, 2, 4, 8, 16, 32, 64...

var n;

n = parseInt(prompt('Digite a posição desejada: '));
console.log('O '+n+'º termo da sequência é: '+Math.pow(2,n-1));

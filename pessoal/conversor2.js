var base, base2, num, numinv, num10;
numinv = '';
num10 = 0;

do {
  base = parseInt(prompt('Digite a base DA QUAL o número será convertido: (2, 8, 10, 16)'));
} while (isNaN(base));

do {
  base2 = parseInt(prompt('Digite a base NA QUAL o número será convertido: (2, 8, 10, 16)'));
} while (isNaN(base2));

num = prompt('Digite o número será convertido: ');

//CONVERSAO PRA DECIMAL:
num = num.split('');
num.reverse();
for (i = 0; i < num.length; i++) {
    switch (num[i]) {
      case 'A':
      case 'a':
        num10 += 10 * (base**i);
        break;
      case 'B':
      case 'b':
        num10 += 11 * (base**i);
        break;
      case 'C':
      case 'c':
        num10 += 12 * (base**i);
        break;
      case 'D':
      case 'd':
        num10 += 13 * (base**i);
        break;
      case 'E':
      case 'e':
        num10 += 14 * (base**i);
        break;
      case 'F':
      case 'f':
        num10 += 15 *(base**i);
        break;
      default:
        num10 += num[i] * (base**i);
    }
}
//CONVERSAO PRA BASE DESEJADA:
do {
  if (base2 == 16) {
    switch (num10 % base2) {
      case 10:
        numinv += 'A';
        break;
      case 11:
        numinv += 'B';
        break;
      case 12:
        numinv += 'C';
        break;
      case 13:
        numinv += 'D';
        break;
      case 14:
        numinv += 'E';
        break;
      case 15:
        numinv += 'F';
        break;
      default:
        numinv += num10 % base2;
    }
} else {
  numinv += num10 % base2;
}
num10 = Math.floor(num10 / base2);
i = Math.floor(num10);
} while (i != 0);

numinv = numinv.split('');
numinv.reverse();
alert('O número convertido para a base ' + base2 + ' é: ' + numinv.join(''));

var base, base2, num, numinv, num10, numconv;
numinv = '';
numconv = '';
num10 = 0;

do {
  base = parseInt(prompt('Digite a base DA QUAL o número será convertido: (2, 8, 10, 16)'));
} while (isNaN(base));

do {
  base2 = parseInt(prompt('Digite a base NA QUAL o número será convertido: (2, 8, 10, 16)'));
} while (isNaN(base2));

do {
  num = parseInt(prompt('Digite o número será convertido: '));
} while (isNaN(num));

//CONVERSAO PRA DECIMAL:
numconv += num;
numconv = numconv.split('');
numconv.reverse();
for (i = 0; i < numconv.length; i++) {
  num10 += numconv[i] * (base**i);
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

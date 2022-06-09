var num, base, numinv, numconv, i;

// numinv = numero convertido invertido
// numconv = numero convertido


numinv ='';
numconv ='';
i = 1;

do {
  base = parseInt(prompt("Digite o número da base na qual o número será convertido: (16, 8, 2...)"));
} while (isNaN(base));
do {  
  num = Number(prompt("Digite o número a ser convertido: "));
} while (isNaN(num));

while (i != 0) {
  if (base == 16) {
    switch (num%base) {
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
        numinv += num % base;
    }
  } else {
     numinv += num%base;
  }
  num = Math.floor(num/base);
  i = Math.floor(num);
}

for (let len = numinv.length - 1; len >= 0; len--) {
  numinv.split('');
  numconv += numinv[len];
}

alert('O número convertido para binário é: '+numconv);

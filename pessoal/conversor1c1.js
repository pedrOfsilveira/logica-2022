var num16, num10,num2, i, c;
num2 = '';
num10 = 0;
num16 = prompt('Digite o número em base 16 a ser convertido para base 2:');

for (i = num16.length - 1, c = 0; i >= 0, c <= num16.length - 1; i--, c++) {
  switch (num16.charAt(i)) {
    case 'A': case 'a': 
      num10 += 10 * Math.pow(16, c);
      break;
    case 'B': case 'b': 
      num10 += 11 * Math.pow(16, c);
      break;
    case 'C': case 'c':
      num10 += 12 * Math.pow(16, c);
      break;
    case 'D': case 'd':
      num10 += 13 * Math.pow(16, c);
      break;
    case 'E': case 'e':
      num10 += 14 * Math.pow(16, c);
      break;
    case 'F': case 'f': 
      num10 += 15 * Math.pow(16, c);
      break;
    default:
      num10 += num16.charAt(i) * Math.pow(16,c);
  }
}
do {
  num2 = num10%2 + num2;
  num10 = Math.floor(num10/2);
} while (num10 != 0);

console.log('O número convertido para a base 2 é: '+num2);
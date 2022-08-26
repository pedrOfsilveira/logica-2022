var size, str, increment, count;
str = '';
count = 0;
size = prompt('Digite o tamanho da sequência: ');

for (i = 0; i < size; i++) {
  do {
  
  increment = prompt('Digite 1 ou 0: ');
  
  } while (increment != 1 && increment != 0);
  
  str+= increment;
  
} 

for (i = 0; i < str.length; i++) {
  if (str.substr(i,3) == '100') {
    count++;
  }
}
console.log('A sequencia 100 está contida '+count+' vezes na sequência total.');

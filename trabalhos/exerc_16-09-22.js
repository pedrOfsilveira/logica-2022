/*
Consultório Médico- 
1. Agendar;
2. Urgência;
3. Consultar;


Lista de Espera:

*/
var menu, consulta, urgencia;
urgencia = [];
consulta = [];

do {
  do {
    menu = parseInt(prompt('---Consultório Médico---\n\n0. Sair\n\n1. Agendar;\n2. Urgência;\n3. Consultar;\n\nLista de Espera:\n'+urgencia.join('\n')+'\n'+consulta.join('\n')));
  } while (menu != 1 && menu != 2 && menu != 3 && menu != 0);
  
  switch(menu) {
    case 0:
      break;
    case 1:
      consulta.push(prompt('Nome do paciente: '));
      break;
    case 2:
      urgencia.push(prompt('Nome do paciente: '));
      break;
    case 3: 
      if(urgencia.length != 0) {
        urgencia.shift();
      } else {
        consulta.shift();
      }
  } 
  
} while(menu != 0);

// SAPOS PULANDO??

var pedras, sapos, pos = [], pulo = [], vet = [];

pedras = parseInt(prompt('Digite o número de pedras no rio: '));
do {
  sapos = parseInt(prompt('Digite o número de sapos: '));
} while(sapos > pedras || sapos < 0);

// transforma pedras em um vetor
for(i = 0, aux = pedras, pedras = []; i < aux; i++) {
  pedras[i] = 0;
}

for(i = 0; i < sapos; i++) {
  do {
    pos[i] = parseInt(prompt('Digite a posição do sapo '+i+': (lembrando que o número de pedras é '+pedras.length+')'));
  } while(pos[i] < 0 || pos[i] > pedras); 
  pedras[pos[i]] = '🐸️';
  pulo[i] = parseInt(prompt('Digite a distância fixa do pulo: '));
}

for(i = 0; i < sapos; i++) { 
  if(pos[i] + pulo[i] <= pedras.length) {
    if(pedras[pos[i] + pulo[i]] == '🐸️') {} 
    else {
      pedras[pos[i] + pulo[i]] = 'X';
    }
  }
  if(pos[i] - pulo[i] >= 0) {
    if(pedras[pos[i] - pulo[i]] == '🐸️') {}
    else {
      pedras[pos[i] - pulo[i]] = 'X';
    }
  }
}
    
alert(pedras.join('  '));    

 

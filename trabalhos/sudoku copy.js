var table1, table2, table3, table4, tables, table, number, pos, again;
tabelona = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];
function sorteio() {
  switch (Math.floor(Math.random()*4)) {
    case 0:
      table1 = [[4,0],[0,2]];
      table2 = [[2,0],[0,4]];
      table3 = [[1,0],[0,3]]; 
      table4 = [[0,2],[0,0]]; 
      break;
    case 1:
      table1 = [[3,0],[0,0]];
      table2 = [[0,0],[0,0]];
      table3 = [[2,0],[0,0]]; 
      table4 = [[0,1],[3,0]]; 
      break;
    case 2:
      table1 = [[0,0],[4,3]];
      table2 = [[0,0],[0,0]];
      table3 = [[0,0],[0,0]]; 
      table4 = [[0,1],[0,0]]; 
      break;
    case 3:
      table1 = [[1,0],[0,4]];
      table2 = [[0,0],[0,0]];
      table3 = [[0,0],[0,1]]; 
      table4 = [[0,0],[2,3]]; 
      break;
  } 
}

function verify(tabela1,tabela2,tabela3) {
  switch(pos) {
    case 0:
      if (
        number == tabela1[0][1] || 
        number == tabela2[0][0] || 
        number == tabela2[0][1] ||
        number == tabela1[1][0] || 
        number == tabela3[0][0] || 
        number == tabela3[1][0] 
      ) {
        alert('Chute inválido!');
      } else {
        tabela1[0][0] = number;
      }
      break; 
    case 1:
      if (
        number == tabela1[0][0] || 
        number == tabela2[0][0] || 
        number == tabela2[0][1] || 
        number == tabela1[1][1] ||
        number == tabela3[0][1] ||  
        number == tabela3[1][1]
      ) {
        alert('Chute inválido!');
      } else {
        tabela1[0][1] = number;
      }
      break; 
    case 2: 
      if (
        number == tabela1[1][1] ||
        number == tabela2[1][0] ||
        number == tabela2[1][1] ||
        number == tabela1[0][0] ||
        number == tabela3[0][0] ||
        number == tabela3[1][0] 
      ) {
        alert('Chute inválido!');
      } else {
        tabela1[1][0] = number;
      }
      break;
    case 3: 
      if (
        number == tabela1[1][0] ||
        number == tabela2[1][0] ||
        number == tabela2[1][1] ||
        number == tabela1[0][1] ||
        number == tabela3[0][1] ||
        number == tabela3[1][1] 
      ) {
        alert('Chute inválido!');
      } else {
        tabela1[1][1] = number;
      }
      break;
  }
}          


function func_tables() {
  tables = table1[0][0] +' - '+table1[0][1]+' | '+ table2[0][0] +' - '+table2[0][1]+'\n'+
  table1[1][0] +' - '+table1[1][1]+' | '+ table2[1][0] +' - '+table2[1][1]+'\n'+
  table3[0][0] +' - '+table3[0][1]+' | '+ table4[0][0] +' - '+table4[0][1]+'\n'+
  table3[1][0] +' - '+table3[1][1]+' | '+ table4[1][0] +' - '+table4[1][1];
}

sorteio();
alert('As tabelas são númeradas da seguinte forma: \n\n0 - 0 | 1 - 1\n0 - 0 | 1 - 1\n2 - 2 | 3 - 3\n2 - 2 | 3 - 3');
alert('As posições são númeradas da seguinte forma: \n\n0 - 1 | 0 - 1\n2 - 3 | 2 - 3\n0 - 1 | 0 - 1\n2 - 3 | 2 - 3');
do {
  do { 
    func_tables();
    if(tables.indexOf(0) != -1) {
      do { 
        table = parseInt(prompt(tables + '\nDigite o número da tabela desejada:'));
      } while (table != 0 && table != 1 && table != 2 && table != 3);
      do {  
        pos = parseInt(prompt(tables +'\nDigite o número da posição desejada:'));
      } while(pos != 0 && pos != 1 && pos != 2 && pos != 3);
      do {
        number = parseInt(prompt(tables + '\nDigite o número desejado:'));
      } while (number != 1 && number != 2 && number != 3 && number != 4);
    }

    switch(table) {
      case 0:
        verify(table1,table2,table3);
        break;
      case 1:
        verify(table2,table1,table4);
        break;
      case 2:
        verify(table3,table4,table1);
        break;
      case 3:
        verify(table4,table3,table2);
        break;
    }
  }while(tables.indexOf(0) != -1);

  do {
    again = prompt('Você ganhou! Deseja jogar de novo? (S/N)');
  } while (again.toUpperCase() != 'S' && again.toUpperCase() != 'N'); 
  
} while(again.toUpperCase() == 'S');

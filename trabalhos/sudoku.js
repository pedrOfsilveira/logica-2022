var table1, table2, table3, table4, tables, table, number, pos;

table1 = [[2,4],[0,0]];
table2 = [[0,0],[0,0]];
table3 = [[1,0],[4,2]]; 
table4 = [[4,2],[0,0]]; 


do {
  tables = table1[0][0] +' - '+table1[0][1]+' | '+ table2[0][0] +' - '+table2[0][1]+'\n'+
  table1[1][0] +' - '+table1[1][1]+' | '+ table2[1][0] +' - '+table2[1][1]+'\n'+
  table3[0][0] +' - '+table3[0][1]+' | '+ table4[0][0] +' - '+table4[0][1]+'\n'+
  table3[1][0] +' - '+table3[1][1]+' | '+ table4[1][0] +' - '+table4[1][1]
  alert('As tabelas são númeradas da seguinte forma: \n\n0 - 0 | 1 - 1\n0 - 0 | 1 - 1\n2 - 2 | 3 - 3\n2 - 2 | 3 - 3');
  alert('As posições são númeradas da seguinte forma: \n\n0 - 1 | 0 - 1\n2 - 3 | 2 - 3\n0 - 1 | 0 - 1\n2 - 3 | 2 - 3');
  do { 
    table = parseInt(prompt(tables + '\nDigite o número da tabela desejada:'));
  } while (table != 0 && table != 1 && table != 2 && table != 3);
  do {  
    pos = parseInt(prompt(tables +'\nDigite o número da posição desejada:'));
  } while(pos != 0 && pos != 1 && pos != 2 && pos != 3);
  do {
    number = parseInt(prompt(tables + '\nDigite o número desejado:'));
  } while (number != 1 && number != 2 && number != 3 && number != 4);

  switch(table) {
    case 0:
      switch(pos) {
        case 0: 
          if (
            number == table1[1][0] ||
            number == table1[0][1] ||
            number == table3[1][0] ||
            number == table3[0][0] ||
            number == table2[0][1] ||
            number == table2[0][0] 
          ) {
            alert('Chute inválido!');
          } else {
            table1[0][0] = number;
          }
          break;
        case 1: 
          if (
            number == table1[0][0] ||
            number == table2[0][0] ||
            number == table2[0][1] ||
            number == table1[1][1] ||
            number == table3[0][1] ||
            number == table3[1][1] 
          ) {
            alert('Chute inválido!');
          } else {
            table1[0][1] = number;
          }
          break;
        case 2: 
          if (
            number == table1[0][0] ||
            number == table1[1][1] ||
            number == table2[1][0] ||
            number == table2[1][1] ||
            number == table3[0][0] ||
            number == table3[0][1] 
          ) {
            alert('Chute inválido!');
          } else {
            table1[1][0] = number;
          }
          break;
        case 3: 
          if (
            number == table1[0][1] ||
            number == table1[1][0] ||
            number == table2[1][0] ||
            number == table2[1][1] ||
            number == table3[0][1] ||
            number == table3[1][1] 
          ) {
            alert('Chute inválido!');
          } else {
            table1[1][1] = number;
          }
          break;
      }
      break;
    case 1:
      switch(pos) {
        case 0: 
          if (
            number == table1[0][0] ||
            number == table1[0][1] ||
            number == table4[0][0] ||
            number == table4[1][0] ||
            number == table2[0][1] ||
            number == table2[1][0] 
          ) {
            alert('Chute inválido!');
          } else {
            table2[0][0] = number;
          }
          break;
        case 1: 
          if (
            number == table2[0][0] ||
            number == table2[1][1] ||
            number == table1[0][0] ||
            number == table1[0][1] ||
            number == table4[0][1] ||
            number == table4[1][1] 
          ) {
            alert('Chute inválido!');
          } else {
            table2[0][1] = number;
          }
          break;
        case 2: 
          if (
            number == table1[1][0] ||
            number == table1[1][1] ||
            number == table2[0][0] ||
            number == table2[1][1] ||
            number == table4[0][0] ||
            number == table4[1][0] 
          ) {
            alert('Chute inválido!');
          } else {
            table2[1][0] = number;
          }
          break;
        case 3: 
          if (
            number == table2[0][1] ||
            number == table2[1][0] ||
            number == table1[1][0] ||
            number == table1[1][1] ||
            number == table4[0][1] ||
            number == table4[1][1] 
          ) {
            alert('Chute inválido!');
          } else {
            table2[1][1] = number;
          }
          break;
      }
      break;
    case 2:
      switch(pos) {
        case 0: 
          if (
            number == table1[0][0] ||
            number == table1[1][0] ||
            number == table4[0][0] ||
            number == table4[0][1] ||
            number == table3[0][1] ||
            number == table3[1][0] 
          ) {
            alert('Chute inválido!');
          } else {
            table3[0][0] = number;
          }
          break;
        case 1: 
          if (
            number == table3[0][0] ||
            number == table3[1][1] ||
            number == table4[0][0] ||
            number == table4[0][1] ||
            number == table1[0][1] ||
            number == table1[1][1] 
          ) {
            alert('Chute inválido!');
          } else {
            table3[0][1] = number;
          }
          break;
        case 2: 
          if (
            number == table4[1][0] ||
            number == table4[1][1] ||
            number == table3[0][0] ||
            number == table3[1][1] ||
            number == table1[0][0] ||
            number == table1[0][1] 
          ) {
            alert('Chute inválido!');
          } else {
            table3[1][0] = number;
          }
          break;
        case 3: 
          if (
            number == table3[0][1] ||
            number == table3[1][0] ||
            number == table4[1][0] ||
            number == table4[1][1] ||
            number == table1[0][1] ||
            number == table1[1][1] 
          ) {
            alert('Chute inválido!');
          } else {
            table3[1][1] = number;
          }
          break;
      }
      break;
    case 3:
      switch(pos) {
        case 0: 
          if (
            number == table2[0][0] ||
            number == table2[1][0] ||
            number == table3[0][0] ||
            number == table3[0][1] ||
            number == table4[0][1] ||
            number == table4[1][0] 
          ) {
            alert('Chute inválido!');
          } else {
            table4[0][0] = number;
          }
          break;
        case 1: 
          if (
            number == table4[0][0] ||
            number == table4[1][1] ||
            number == table3[0][0] ||
            number == table3[0][1] ||
            number == table2[0][1] ||
            number == table2[1][1] 
          ) {
            alert('Chute inválido!');
          } else {
            table3[0][1] = number;
          }
          break;
        case 2: 
          if (
            number == table3[1][0] ||
            number == table3[1][1] ||
            number == table4[0][0] ||
            number == table4[1][1] ||
            number == table2[0][0] ||
            number == table2[0][1] 
          ) {
            alert('Chute inválido!');
          } else {
            table4[1][0] = number;
          }
          break;
        case 3: 
          if (
            number == table4[0][1] ||
            number == table4[1][0] ||
            number == table3[1][0] ||
            number == table3[1][1] ||
            number == table2[0][1] ||
            number == table2[1][1] 
          ) {
            alert('Chute inválido!');
          } else {
            table4[1][1] = number;
          }
          break;
      }
  }
}while(tables.indexOf(0) != -1);
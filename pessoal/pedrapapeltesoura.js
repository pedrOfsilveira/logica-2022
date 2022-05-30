var ans, ppt, again;

again = 1;

while (again == 1) {
  ppt = parseInt(Math.random() * 3);

  do {
    ans = parseInt(prompt('Escolha:\n0.PEDRA\n1.PAPEL\n2.TESOURA'));
  } while (ans != 0 && ans != 1 && ans != 3);

  if (ans == 0 && ppt == 0) {
    alert('VOCÊ JOGOU: PEDRA\nO COMPUTADOR JOGOU: PEDRA\n\nEMPATE!');
  } else if (ans == 0 && ppt == 1) {
    alert('VOCÊ JOGOU: PEDRA\nO COMPUTADOR JOGOU: PAPEL\n\nVOCÊ PERDEU!');
  } else if (ans == 0 && ppt == 2) {
    alert('VOCÊ JOGOU: PEDRA\nO COMPUTADOR JOGOU: TESOURA\nVOCÊ GANHOU!');
  } else if (ans == 1 && ppt == 0) {
    alert('VOCÊ JOGOU: PAPEL\nO COMPUTADOR JOGOU: PEDRA\n\nVOCÊ GANHOU!');
  } else if (ans == 1 && ppt == 1) {
    alert('VOCÊ JOGOU: PAPEL\nO COMPUTADOR JOGOU: PAPEL\n\nEMPATE!');
  } else if (ans == 1 && ppt == 2) {
    alert('VOCÊ JOGOU: PAPEL\nO COMPUTADOR JOGOU: TESOURA\n\nVOCÊ PERDEU!');
  } else if (ans == 2 && ppt == 0) {
    alert('VOCÊ JOGOU: TESOURA\nO COMPUTADOR JOGOU: PEDRA\n\nVOCÊ PERDEU!');
  } else if (ans == 2 && ppt == 1) {
    alert('VOCÊ JOGOU: TESOURA\nO COMPUTADOR JOGOU: PAPEL\n\nVOCÊ GANHOU!');
  } else if (ans == 2 && ppt == 2) {
    alert('VOCÊ JOGOU: TESOURA\nO COMPUTADOR JOGOU: TESOURA\n\nEMPATE!');
  }

  do {
    again = parseInt(prompt('Deseja jogar novamente?\n1. SIM\n2. NÃO'));
  } while (again != 1 && again != 2);
}

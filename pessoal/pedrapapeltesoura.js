var ans, ppt;

ppt = parseInt(Math.random() * 3);
ans = parseInt(prompt('Escolha:\n1.PEDRA\n2.PAPEL\n3.TESOURA'));

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

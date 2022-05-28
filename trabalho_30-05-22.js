/*
1. Um quadrado quase mágico, de dimensões NxN, é um quadrado que obedece à seguinte
condição: Existe um número inteiro positivo M tal que: para qualquer linha, a soma dos números
da linha é igual a M; e para qualquer coluna, a soma dos números da coluna é também igual a
M. O quadrado seria mágico, e não apenas quase mágico, se a soma das diagonais também
fosse M.
Por exemplo, a figura abaixo, parte (a), apresenta um quadrado quase mágico onde M=21 e na
parte (b) um quadrado não mágico.

Escreva um programa que leia os valores de um quadrado de dimensões 3x3 (A1, A2, A3, A4,
A5, A6, A7, A8, A9) e informe se ele é mágico, quase mágico ou não mágico. Caso seja mágico
ou quase mágico, informar o valor de M.
*/

var A1, A2, A3, A4, A5, A6, A7, A8, A9, M1, M2, M3, M11, M12, M13, M21, M22, M23;

A1 = parseInt(prompt("Digite A1: "));
A2 = parseInt(prompt("Digite A2: "));
A3 = parseInt(prompt("Digite A3: "));
A4 = parseInt(prompt("Digite A4: "));
A5 = parseInt(prompt("Digite A5: "));
A6 = parseInt(prompt("Digite A6: "));
A7 = parseInt(prompt("Digite A7: "));
A8 = parseInt(prompt("Digite A8: "));
A9 = parseInt(prompt("Digite A9: "));

M1 = A1 + A2 + A3; 
M2 = A4 + A5 + A6;
M3 = A7 + A8 + A9;

M11 = A1 + A4 + A7;
M12 = A2 + A5 + A8;
M13 = A3 + A6 + A9;

M21 = A1 + A5 + A9;
M22 = A3 + A5 + A7;

if ((M1 == M2 && M1 == M3) && (M11 == M12 && M11 == M13) && (M21 != M22)) {
  alert("O quadrado é quase mágico, e M é igual a: "+M1);
}
else if ((M1 == M2 && M1 == M3) && (M11 == M12 && M11 == M13) && (M21 == M22)) {
  alert("O quadrado é mágico, e M é igual a: "+M1);
}
else {
  alert("O quadrado não é mágico.")
}

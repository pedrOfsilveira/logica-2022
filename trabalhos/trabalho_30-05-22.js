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

if ((M1 == M11) && (M1 == M2 && M1 == M3) && (M11 == M12 && M11 == M13) && (M21 != M22)) {
  alert("O quadrado é quase mágico, e M é igual a: "+M1);
}
else if ((M1 == M11) && (M1 == M2 && M1 == M3) && (M11 == M12 && M11 == M13) && (M21 == M22)) {
  alert("O quadrado é mágico, e M é igual a: "+M1);
}
else {
  alert("O quadrado não é mágico.")
}


/*
2. Em uma escola foi organizado um campeonato de aviões de papel. Cada aluno participante
receberá uma certa quantidade de folhas de um papel especial para fazer os seus modelos de
aviões. Esta quantidade será decidida pelos juízes do campeonato.
Os juízes demoraram a chegar na escola, deixando a diretora aflita, pois comprou uma boa
quantidade de folhas de papel especial, mas não sabe se a quantidade comprada vai ser
suficiente.
Considere, por exemplo, que foram compradas 100 folhas de papel especial, e que há 33
competidores. Se os juízes decidirem que cada competidor tem direito a três folhas de papel, a
quantidade comprada é suficiente. Mas se os juízes decidirem que cada competidor tem direito
a quatro folhas, a quantidade comprada pela diretora não seria suficiente.
Sendo assim, escreva um programa que, dados o número de competidores, o número de folhas
de papel especial compradas pela escola e o número de folhas que cada competidor deve
receber, determine se o número de folhas comprado pela escola é suficiente.
*/

var folha, comp, folha_comp;

comp = parseInt(prompt("Digite o número de competidores: "));
folha = parseInt(prompt("Digite o número de folhas: "));
folha_comp = parseInt(prompt("Digite o número de folhas por competidor: "));

if (folha >= folha_comp*comp) {
  alert("O número de folhas é suficiente.");
}
else if (folha < folha_comp*comp) {
  alert("O número de folhas não é suficiente.");
}

/* 
3. João deseja fazer bolos para seus amigos, usando uma receita que indica que devem ser
usadas 2 xícaras de farinha de trigo, 3 ovos e 5 colheres de sopa de leite. Em casa ele tem A
xícaras de farinha de trigo, B ovos e C colheres de sopa de leite. João não tem muita prática
com a cozinha, e portanto ele só se arriscará a fazer medidas exatas da receita de bolo (por
exemplo, se ele tiver material suficiente para fazer mais do que 2 e menos do que 3 bolos, ele
fará somente 2 bolos).
Sabendo disto, ajude João escrevendo um programa que, dados 3 inteiros A, B e C (indicando
respectivamente o número de xícaras de farinha de trigo, o número de ovos e o número de
colheres de sopa de leite que João tem em casa), determine qual a quantidade máxima de
bolos que ele consegue fazer.
*/

var A, B, C, rec;

A = parseInt(prompt("Digite o número de xícaras de farinha de trigo: "));
B = parseInt(prompt("Digite o número de ovos: "));
C = parseInt(prompt("Digite o número de colheres de sopa de leite: "));

rec = Math.floor((A/2 + B/3 + C/5)/3);

alert("João consegue fazer "+rec+" bolo(s).");

/* 
4. Faça um programa para verificar se se dois intervalos fechados (I1, F1, I2, F2) possuem
intersecção de valores, onde I e F representam o início e fim de cada intervalo.
*/

var I1, F1, I2, F2;

I1 = Number(prompt("I1: "));
F1 = Number(prompt("F1: "));
I2 = Number(prompt("I2: "));
F2 = Number(prompt("F2: "));



if ((I2 >= I1 && I2 <= F1)||(F2 >= I1 && F2 <= F1)||(I1 >= I2 && I1 <= F2)||(F1 >= I2 && F1 <= F2)) {
  alert("Possui intersecção!");
}
else {
  alert("Não possui intersecção!");
}

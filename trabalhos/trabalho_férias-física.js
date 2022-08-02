var vet, vetY, vetX, qua, ang, SX, SY, S;
vet = [[]];
ang = [[]];
vetY = [[]];
vetX = [[]];
SX = 0;
SY = 0;
qua = parseInt(prompt('Digite a quantidade de vetores a serem somados: '));


for(i = 0; i < qua; i++) {
 vet[i] = Number(prompt('Qual o módulo do vetor '+(i+1)+'? '));
 ang[i] = Number(prompt('Qual o ângulo do vetor com o eixo X? '));
}

for (i = 0; i < vet.length; i++) {
  vetY[i] = vet[i] * Math.sin(ang[i] * Math.PI / 180);
  vetX[i] = vet[i] * Math.cos(ang[i] * Math.PI / 180);
  SX += vetX[i];
  SY += vetY[i]; 
}

S = Math.sqrt(SX**2 + SY**2);

console.log('O módulo da força resultante da soma dos vetores é de '+S+'N.');


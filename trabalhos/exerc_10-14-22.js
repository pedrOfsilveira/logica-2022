/*
1. Elaborar um programa que leia o nome completo de um aluno. O programa deve validar o
preenchimento de um nome completo e exibir a senha inicial do aluno, a qual será o sobrenome
seguido pelo número de vogais do nome completo dele. O programa deve conter as funções:
- validarNome() - que receba um nome como parâmetro e retorne true (nome completo) ou
false (nome incompleto)
- obterSobrenome() - que receba um nome como parâmetro e retorne o último nome do
aluno em letras minúsculas
- contarVogais() - que receba um nome e retorne o número de vogais deste, com dois
dígitos.
*/

var sobrenome, valid, vogais, nomeCompleto;

vogais = 0;

nomeCompleto = prompt('Digite o nome completo do aluno: ');
nomeCompleto = nomeCompleto.split(' ');

function validarNome(nome) {
  if (nome.length < 2) {
    valid = false;
  } else {
    valid = true;
  }
  return valid;
}

function obterSobrenome(nome) {
  sobrenome = nome[nome.length-1].toLowerCase();
  return sobrenome;
}

function contarVogais(nome) {
  for(i = 0, nome = nome.join(''); i < nome.length; i++) {
    switch(nome[i]) {
      case 'a': case 'e': case 'i': case 'o': case 'u':
        vogais++;
    }
  }
  return vogais;
}
if (validarNome(nomeCompleto) == true) {
  alert('A senha do aluno é: '+obterSobrenome(nomeCompleto)+contarVogais(nomeCompleto));
} else {
  alert('Nome incompleto.');
}

/*
2. Elaborar um programa para uma clínica veterinária, que leia o preço de uma vacina e se o
cliente possui ou não convênio. Caso possua algum convênio exibir as opções "1-Amigo dos
Animais" e "2-Saúde Animal". O programa deve exibir o valor do desconto (10% sem convênio;
20% para "Amigo dos Animais"; 50% para Saúde Animal") e o valor a ser pago. Criar a função:
- calcularDesconto() - que recebe como parâmetro valor e taxa de desconto. Retornar o
valor do desconto.
*/

var vacinaPreco, confConvenio, convenio, taxa, desconto;

vacinaPreco = parseFloat(prompt('Bem-vindo à Clínica Veterinária!\nInsira o valor da vacina: '));
do {
  confConvenio = prompt('Você possui algum convênio? (S/N)').toUpperCase();
} while(confConvenio != 'S' && confConvenio != 'N');
do {
  convenio = parseInt(prompt("Escolha a opção correspondente ao convênio:\n\n1.Amigo dos animais;\n2.Saúde Animal."));
} while(convenio != 1 && convenio != 2);

switch(convenio) {
  case 1: 
    taxa = 0.5;
    break;
  case 2:
    taxa = 0.2;
}

function calcularDesconto(valor,taxaD) {
  desconto = valor*taxaD;
  return desconto;
}

alert('Valor do desconto: R$'+calcularDesconto(vacinaPreco,taxa).toFixed(2)+'\nValor a ser pago R$'+(vacinaPreco-calcularDesconto(vacinaPreco,taxa)).toFixed(2));

/*
3. Elaborar um programa que leia o nome e a idade de um atleta de um clube de natação. O
programa deve exibir o nome com "-" abaixo das letras do nome e a categoria do atleta, que pode
ser "Infantil" (até 12 anos), "Juvenil" (entre 13 e 18 anos) ou "Adulto" (acima de 18 anos). O
programa deve conter as funções:
- retornarTracos() - que receba um nome como parâmetro e retorne uma linha com "-" para
as letras do nome (nos espaços, manter os espaços).
- categorizarAluno() - que receba um número como parâmetro e retorne a categoria do
aluno.
*/

var nome, idade;

nome = prompt('Digite o nome do atleta: ');
do {
  idade = parseInt('Digite a idade do atleta: ');
} while(isNaN(idade) && idade <= 0);

function retornarTracos(NOME) {
  var tracos = '';
  for(i = 0; i < NOME.length; i++) {
    if(NOME[i] == ' ') {
      tracos += ' ';
    } else {
      tracos += '-';
    }
  }
  return tracos;
}
function categorizarAluno(numero) {
  if (numero <= 12) {
    var categoria = 'Infantil';
  } else if (numero >= 13 && numero < 18) {
    var categoria = 'Juvenil';
  } else {
    var categoria = 'Adulto';
  }
  return categoria;
}

alert(nome+'\n'+retornarTracos(nome)+'\n'+categorizarAluno(idade));


/*
Para um determinado jogo, precisamos criar funções para as seguintes funcionalidades:

4. Precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma
função que receba 2 parâmetros, DANO e SAUDE. A função deve retornar verdadeiro se o dano
for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e falso caso contrário.

5. Temos um vetor de 5 posições, com o nome de 5 itens que nosso herói carrega na mochila.
Quando o personagem chega numa porta, queremos detectar automaticamente se ele tem ou não
uma chave para deixá-lo passar. Crie uma função temChave que percorre o vetor comparando se
cada item tem o nome “chave” e retorne verdadeiro se encontrar alguma. Caso contrário, a função
deve retornar falso.

6. Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição
possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela.
Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor
positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e
100.
*/
//1
function morte(DANO, SAUDE) {
  if (SAUDE <= DANO) {
    return true;
  } else {
    return false;
  }
}
//2
function temChave(vetor) {
  for(i = 0; i < 5; i++) {
    if (vetor[i] == 'chave') {
      return true;
    } else {
      return false;
    }
  }
}
//3
function limitaPosicao(POSICAO) {
  if (POSICAO >= 0 && POSICAO <= 100) {
    return POSICAO;
  } else if (POSICAO < 0  && POSICAO > -100){
    return Math.abs(POSICAO);
  } else if (POSICAO < 0) {
    return 0;
  } else {
    return 100;
  }
}






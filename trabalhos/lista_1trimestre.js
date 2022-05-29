//Algoritmo "DOBRO"
var n = Number(prompt("Digite um número: "));
var d = n*2;
    console.log("O dobro é "+d);

//Algoritmo "PARESVIZINHOS"
var pp, pa, n;
n = Number(prompt("Digite um número: "));
pp = n + 2 - (n%2);
pa = n - 2 + (n%2);

alert("O número par anterior é "+ pa + "e o próximo é "+ pp);


//leia dois números.calcule e informe a soma desses números

var a,b,soma;
a = Number(prompt("Primeiro número: "));
b = Number(prompt("Segundo número: "));
soma = a+b;
   
alert(soma);


//LISTA DE EXERCÍCIOS!!!


//EX1
//Algoritmo "CALCULO TERRENO"

var d1,d2,a;

d1 = Number(prompt("Digite a largura: "));
d2 = Number(prompt("Digite a altura: "));
a = d1*d2;
alert("A área do seu terreno é: "+a);

//EX2
//Algoritmo "DIAS DE VIDA"

var i,d,n;

i = Number(prompt("Digite sua idade: "));
n = prompt("Digite seu nome: ");
d = i*365;
alert(n+", você tem "+d+" dias de vida! Se cuida...");

//EX3
//Algoritmo "CELSIUS2FAHRENHEIT"

var F,C;

C = Number(prompt("Digite a temperatura em Cº: "));
F = C*1.8+32
alert("A temperatura em Fº é: "+F);

//EX4
//Algoritmo "FAHRENHEIT2CELSIUS"

var F,C;

F = Number(prompt("Digite a temperatura em Fº: "));
C = (F-32)/1.8
alert("A temperatura em Cº é: "+C);


//EX5
//Algoritmo "VOLUME LATA"

var v,r,h;

r = Number(prompt("Digite o raio da lata: "));
h = Number(prompt("Digite a altura da lata: "));

v =  3.14*(r*r)*h;

alert("O volume da lata é de "+v+"m³.");

//EX6
//Algoritmo "MEDIA POND"

var n1,n2,n3,m;

n1 = Number(prompt("Digite a primeira nota: "));
n2 = Number(prompt("Digite a segunda nota: "));
n3 = Number(prompt("Digite a terceira nota: "));

m = (n1+(n2*2)+(n3*7))/10;

alert("A média é "+m+".");


//EX7
//Algoritmo "PRESTAÇÃO A"

var va,vo,tx,t;

vo = Number(prompt("Digite o valor original da prestação: "));
tx = Number(prompt("Digite o valor da taxa mensal de juros: "));
t  = Number(prompt("Digite o tempo de atraso (em meses) da prestação: "));

va = vo+(tx*t);

alert("O valor em atraso é: "+va);

//EX8
//Algoritmo "PESOSSS"

var p,p15,p20;

p = Number(prompt("Digite o seu peso: "));
p15 = p+(p*0.15);
p20 = p-(p*0.2);

alert("O seu peso caso você emagreça 20% será: "+p20+"\n"+"O seu peso caso você engorde 15% será: "+p15);

//EX9
//Algoritmo "DOLAR2REAL"

var d,r,c;

d = parseFloat(prompt("Digite o valor em dolár: "));
c = parseFloat(prompt("Digite a cotação atual do dolár: "));
r = d*c;

alert("O valor em real é R$"+r);

//EX10
//Algoritmo "REAL2DOLAR"

var d,r,c;

r = parseFloat(prompt("Digite o valor em real: "));
c = parseFloat(prompt("Digite a cotação atual do dolár: "));
d = r/c;

alert("O valor em real é R$"+d);


//EX11
//Algoritmo "AB"

var a,b,aux;

a = Number(prompt("Digite o valor de A: "));
b = Number(prompt("Digite o valor de B: "));

aux = a
a = b
b = aux

alert("O novo valor de A é "+a+"."+"\n"+"O novo valor de B é "+b+".");

//EX12
//Algoritmo "QUADRADO DA DIFERENÇA"

var n1,n2,qd

n1 = Number(prompt("Digite o valor de A: "));
n2 = Number(prompt("Digite o valor de B: "));

qd = (n1-n2)*(n1-n2);

alert("O valor do quadrado da diferença de A e B é: "+qd);


//EX13
//Algoritmo "SOMA_QUADRADO3"

var n1,n2,n3,s

n1 = Number(prompt("Digite o valor de A: "));
n2 = Number(prompt("Digite o valor de B: "));
n3 = Number(prompt("Digite o valor de C: "));

s = (n1**2)+(n2**2)+(n3**2);

alert("A soma dos quadrados de A,B e C é: "+s);

//EX14
//Algoritmo "QUADRADO_SOMA3"

var n1,n2,n3,qs

n1 = Number(prompt("Digite o valor de A: "));
n2 = Number(prompt("Digite o valor de B: "));
n3 = Number(prompt("Digite o valor de C: "));

qs = (n1+n2+n3)**2;

alert("O quadrado da soma de A, B e C é: "+qs);


//EX15
//Algoritmo "SP4"

var a,b,c,d,p13,s24;

a = Number(prompt("Digite o valor de A: "));
b = Number(prompt("Digite o valor de B: "));
c = Number(prompt("Digite o valor de C: "));
d = Number(prompt("Digite o valor de D: "));

p13 = a*c;
s24 = b+d;

alert("O valor do produto entre A e C é: "+p13+"\n"+"O valor da soma entre B e D é: "+s24);

//EX16
//Algoritmo "REAJUSTE_S"

var nsm,sm,re;

sm = Number(prompt("Digite o valor do seu salário mensal: "));
re = Number(prompt("Digite o valor percentual do reajuste: "));

nsm = sm+sm*re/100;

alert("O valor do seu novo salário mensal é: "+nsm);


//EX17
//Algoritmo "VALOR RESTAURANTE"

//Elaborar um programa para um restaurante que leia o preço por quilo e o consumo (em gramas) de um cliente.
//O programa deve ler também a quantidade e o valor de bebidas consumidas.
//Ao final, exibir o valor total a ser pago pelo cliente.


var pkg, con, vcon, beb, vbeb, vtbeb, vt, sm, psm
//pkg = preço kg
//con = consumo
//vcon = valor do consumo
//beb = bebidas
//vbeb = valor das bebidas
//vtbeb = valor total das bebidas
//vt = valor total


pkg = Number(prompt("Digite o preço do quilo: "));
con = Number(prompt("Digite o consumo (em gramas): "));
beb = Number(prompt("Digite o número de bebidas consumidas: "));
vbeb = Number(prompt("Digite o valor das bebidas: "));
sm = Number(prompt("Digite seu salário mensal: "));

vtbeb = beb * vbeb;
vcon = pkg * (con/1000);
vt = vcon + vtbeb;
psm = vt/sm*100 

alert("O valor total a ser pago é: R$"+vt.toFixed(2)+"\n"+"💰___Recibo___💰"+"\n"+"🍗Consumo: R$"+vcon.toFixed(2)+"\n"+"🍹Bebidas: R$"+vtbeb.toFixed(2)+"\n"+"\n"+"Você gastou "+psm.toFixed(2)+"%"+"de seu salário mensal.");

//🤩variável.toFixed(casas decimais) = comando para mostrar um número específico de casas.🤩

//EX18
//Um programa para calcular a média de um aluno consideranto 3 trimestres:
//Algoritmo "MÉDIATRIM"

var n1,n2,n3,m

n1 = Number(prompt("Digite a primeira nota: "));
n2 = Number(prompt("Digite a segunda nota: "));
n3 = Number(prompt("Digite a terceira nota: "));
m = (n1+n2+n3)/3;

alert("Sua média é "+m.toFixed(1));

//EX19
//No processo seletivo do IFRS existem vaŕios cursos técnicos (Informática para internet, automação, refrigeração e Enfermagem).
// Faça um programa que leia a quantidade de vagas ofertadas para cada curso e o número de inscritos.
// Ao final, mostre o total de alunos inscritos e o percentual de procura por curso.


var vInfo, pInfo, aInfo, vAuto, pAuto, aAuto, vRefri, pRefri, aAuto, vEnf, pEnf, aEnf, tAlunos

vInfo = Number(prompt("Digite a quantidade de vagas do curso de Informática: "));
aInfo = Number(prompt("Digite a quantidade de inscritos no curso de Informática: "));

vAuto = Number(prompt("Digite a quantidade de vagas do curso de Automação: "));
aAuto = Number(prompt("Digite a quantidade de inscritos no curso de Automação: "));

vRefri = Number(prompt("Digite a quantidade de vagas do curso de Refrigeração: "));
aRefri = Number(prompt("Digite a quantidade de inscritos no curso de Refrigeração: "));
  
vEnf = Number(prompt("Digite a quantidade de vagas do curso de Enfermagem: "));
aEnf = Number(prompt("Digite a quantidade de inscritos no curso de Enfermagem: "));

tAlunos = aInfo + aAuto + aRefri + aEnf;

pInfo = aInfo/tAlunos * 100;
pRefri = aRefri/tAlunos * 100;
pAuto = aAuto/tAlunos * 100;
pEnf = aEnf/tAlunos * 100;

alert("O número total de alunos é: "+tAlunos+"\n"+"O percentual de procura é:"+"\n"+"💻Informática: "+pInfo.toFixed(2)+"%"+"\n"+"⛄Refrigeração: "+pRefri.toFixed(2)+"%"+"\n"+"🤖Automação: "+pAuto.toFixed(2)+"%"+"\n"+"🏥Enfermagem: "+pEnf.toFixed(2)+"%");


//EX20
//No processo seletivo do IFRS existem vaŕios cursos técnicos (Informática para internet, automação, refrigeração e Enfermagem).
//Faça um programa que leia a quantidade de vagas ofertadas para cada curso e o número de inscritos.
//Ao final, mostre o total de alunos inscritos e o percentual de procura por curso.
//Quantidade de alunos por vaga.

var vInfo, pInfo, aInfo, avInfo, vAuto, pAuto, aAuto, avAuto, vRefri, pRefri, aRefri, avRefri, vEnf, pEnf, aEnf, avEnf, tAlunos

vInfo = Number(prompt("Digite a quantidade de vagas do curso de Informática: "));
aInfo = Number(prompt("Digite a quantidade de inscritos no curso de Informática: "));

vAuto = Number(prompt("Digite a quantidade de vagas do curso de Automação: "));
aAuto = Number(prompt("Digite a quantidade de inscritos no curso de Automação: "));

vRefri = Number(prompt("Digite a quantidade de vagas do curso de Refrigeração: "));
aRefri = Number(prompt("Digite a quantidade de inscritos no curso de Refrigeração: "));
  
vEnf = Number(prompt("Digite a quantidade de vagas do curso de Enfermagem: "));
aEnf = Number(prompt("Digite a quantidade de inscritos no curso de Enfermagem: "));

tAlunos = aInfo + aAuto + aRefri + aEnf;

//Inscritos por curso:
pInfo = aInfo/tAlunos * 100;
pRefri = aRefri/tAlunos * 100;
pAuto = aAuto/tAlunos * 100;
pEnf = aEnf/tAlunos * 100;


//Alunos por vaga:
avInfo = aInfo/vInfo;
avRefri = aRefri/vRefri;
avAuto = aAuto/vAuto;
avEnf = aEnf/vEnf;

alert("O número total de alunos é: "+tAlunos+"\n"+"O percentual de procura é:"+"\n"+"💻Informática: "+pInfo.toFixed(2)+"%"+"\n"+"⛄Refrigeração: "+pRefri.toFixed(2)+"%"+"\n"+"🤖Automação: "+pAuto.toFixed(2)+"%"+"\n"+"🏥Enfermagem: "+pEnf.toFixed(2)+"%");

alert("O total de alunos por vaga é: "+"\n"+"💻Informática: "+avInfo.toFixed(2)+"\n"+"⛄Refrigeração: "+avRefri.toFixed(2)+"\n"+"🤖Automação: "+avAuto.toFixed(2)+"\n"+"🏥Enfermagem: "+avEnf.toFixed(2));


//EX21
//Faça um programa que leia o tamanho de uma lista circular e uma determinada posição desta lista. A partir daí o programa deve calcular a proxima posição e a posição anterior (considere a posição inicial 0) 0 1 2 3 4

var tam, num, pos, pos_p, pos_a;

tam = Number(prompt("Digite o tamanho da lista: "));
pos = Number(prompt("Digite a posição: "));


pos_p = (pos+1)%tam;
pos_a = ((pos-1)+tam)%tam;


alert("Posição anterior:"+pos_a+"\nPosição posterior:"+pos_p);

//EX22
//Uma companhia de carros paga a seus empregrados um salário de R$500,00 por mês mais uma comissão de R$50,00 para cada carro vendido e mais 5% do valor da venda. Elabore um programa para calcular e imprimir o salário do vendedor num dado mês recebendo como dados de entrada o nome do vendedor, o número de carros vendidos e o valor total de vendas.


var nome, cv, vt, sal;

nome = String(prompt("Digite o nome do vendedor: "));
cv = Number(prompt("Digite o número de carros vendidos: "));
vt = Number(prompt("Digite o valor total de vendas: "));

sal = 500 + 50*cv + vt*0.05;

alert("Seu salário mensal é: \n 💰R$"+sal.toFixed(2)+", "+nome+".🎅");








/* MATÉRIA NOVA

        \--USANDO O MATH-------\

  O objeto Math permite que sejam executadas operações matemáticas em números.

    sintaxe:    Math.propriedade; 
                Math.PI; (valor de pi)
               (Math.PI).toFixed(2)*raio;
                Math.pow(x,y);  
                Math.sqrt(base);
                Math.abs(x);  retorna o valor ABSOLUTO (positivo) de X
                Math.round(x); retorna o valor de x arredondado para o seu inteiro mais próximo (4.5 retorna 5)
                Math.ceil(x) retorna o valor de x arredondado (cima) para o seu inteiro mais próximo
    '           Math.floor(x) retorna o valor de x arredondado (baixo) para o seu inteiro mais próximo (semelhante ao parseInt)
                Math.min(x,...,z) e Math.max(x,...,z) retorna o menor ou maior valor em uma lista de argumentos     
                Math.random(); retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo)
                Math.floor((Math.random()*19));
                Math.sin(x); retorna o seno
                Math.cos(x); retorna o cosseno */


//EX1
//Dado  um  número  de  3  algarismos  N  =  CDU  (onde  C  é  o  algarismo  das centenas, 
//é o algarismo das dezenas e U o algarismo das unidades), retorne a decomposição deste número. 
//Ex: N=321 (3 centenas, 2 dezenas e 1 unidade).

var N, C, D, U

    N = Number(prompt("Digite o número a ser decomposto: "));    
    C = Math.floor(N/100);
    D = Math.floor(N/10 - C*10);
    U = Math.floor(N - D*10 - C*100);

    alert(C+" centenas, "+D+" dezenas, "+U+" unidades.");


//EX2
//Converta um valor informado em segundos para o formato H:M:S (horas, minutos e segundos).

var v, h, m, s

    v = Number(prompt("Digite o valor em segundos: "));
    
    h = Math.floor(v/3600); //transforma o valor em hora aqui
    m = Math.floor(v/60-h*60); //transforma em minuto e diminui a hora *60
    s = Math.floor(v-h*3600-m*60); //ja é segundos, entao só diminui a hora *3600 e os minutos *60
   
    alert("⏰"+h+":"+m+":"+s);

//EX3
//Encontre o valor que está na posição P de um número inteiro N, considerando as posições da direita para a esquerda.
//Ex: N=12345 P=2 (Resultado: 4).

    var pos, num, r, pot;

        num = Number(prompt("Digite o número: "));
        pos = Number(prompt("Digite a posição: "));
        pot = Math.floor(Math.pow(10,pos));
        r = Math.floor((num/pot - Math.floor(num/pot))*10);
        
    
        alert("Resultado: "+r);

//EX4
//Tendo como dados de entrada dois pontos quaisquer no plano, P(x1,y1) e P(x2,y2), escreva a distância entre eles, sabendo-se que esta distância é dada por:

    var x1,y1,x2,y2,d;

        x1 = Number(prompt("Digite x1: "));
        y1 = Number(prompt("Digite y1: "));
        x2 = Number(prompt("Digite x2: "));
        y2 = Number(prompt("Digite y2: "));

        d = Math.sqrt((x2-x1)**2+(y2-y1)**2);
        
        alert("A distância é: "+Math.floor(d));
    


//29/04


//EX1
//terceiro link
//t pessoas ja clicaram
//num de pessoas que clicam no segundo link é o dobro do terceiro
//num de pessoas que clicam no segundo link é metade do primeiro 
                 
    var t, s, p;

        t = Number(prompt("Digite o número de pessoas que clicaram no terceiro link: "));
        s = t*2;
        p = s*2;
        
        alert("O número de pessoas que clicaram no primeiro link é: "+p);



                
//EX2
//trocar o piso sala de aula
//sala retangular
//largura l metros e comprimento c metros, l e c inteiros
//comprar lajotas 
//lajotas possuem 1 metro de diagonal
//lajotas tipo 1, 2 e 3
//4 lajotas do tipo 3
//calcular o número de lajotas do tipo 1 e 2 que serão necessárias
//se a largura for 3 e o comprimento for 5: 23 lajotas do tipo 1 e 12 tipo 2


//diagonal = lado * sqrt2

    var l, c, laj1, laj2, nl;

        l = Number(prompt("Digite a largura (em metros): "));
        c = Number(prompt("Digite o comprimento (em metros): "));
        
        laj1 = l*c + (l-1)*(c-1);
        laj2 = (l-1)*2 + (c-1)*2;  
        nl = laj1 + laj2 + laj3;

        alert("O número de lajotas necessário será: "+Math.round(nl)+"\nLajotas tipo 1: "+Math.round(laj1)+"\nLajotas tipo 2: "+Math.round(laj2)+"\nLajotas tipo três: 4");

      


    var N1,NR

        N1 = Number(prompt("Digite a nota: "));
        NR = (21 - N1)/2;
    
        alert("Você precisa de "+NR+" nos próximos 2 trimestres.");



/*              ESTRUTURAS DE CONTROLE!!!?!?!?:!:?!!??:!:?!:!

        
    //ESTRUTURAS DE DECISÃO
        As expressões lógicas são aquelas que retornam um valor lógico (V ou F).

            == igualdade
            != diferença
            > maior que
            >= maior ou igual que
            < menor que
            <= menor ou igual que

        if
        if (condição) {
            comandos;
        }
        
        else{
        }
*/

    var n1,n2,media;

        n1 = Number(prompt("Digite a nota 1: "));
        n2 = Number(prompt("Digite a nota 2: "));
        media = (n1+n2)/2;
       
         if (media >= 7) {
            alert("Aprovado.\nSua média foi "+media+". Parabéns!");
        }

        if (media < 7) {
            alert("Reprovado.\nSua média foi "+media+". Você precisa estudar mais.");
        }


//AREA CIRCULO

    var r, a;

        r = Number(prompt("Digite o raio: "));
        
        if (r > 0) {       
        a = Math.PI * r**2;
        alert("A área é "+a.toFixed(2)+".");
        }    
        
        if (r <= 0) {
        alert("NEGATIVO😩🈶?!?!?!??!?!?!!!?!????");
        }
    
    
    var r, a;

        r = Number(prompt("Digite o raio: "));
        
        if (r > 0) {       
        a = Math.PI * r**2;
        alert("A área é "+a.toFixed(2)+".");
        }    
        
        else{
        alert("NEGATIVO😩🈶?!?!?!??!?!?!!!?!????");
        }

       
//POSITIVO OU NEGATIVO

    var n
    
        n = parseInt(prompt("Digite um número inteiro: "));
        
        if (n == 0) {
        alert ("Você digitou zero😠");
        }
        if (n < 0) {
        alert("O número é negativo.");
        }
        if (n > 0) {
        alert("O número é positivo.");
        }

//PAR OU IMPAR


    var n
        
        n = parseInt(prompt("Digite um número inteiro: "));
        
        if (n%2 == 0) {
        alert("O número é par!");
        }
        else{
        alert("O número é ímpar.");
        } 
        

//CALCULADORA

    var n1,n2,op

        n1 = Number(prompt("Digite o primeiro número: "));
        n2 = Number(prompt("Digite o segundo número: "));
        op = String(prompt("Digite a operação: *, /, +, -, **"));
        
        if (op == "*") {
          alert("Resultado: "+(n1 * n2));
        }
        if (op == "/") {
          alert("Resultado: "+(n1 / n2));
        }        
        if (op == "+") {
          alert("Resultado: "+(n1 + n2));
        }
        if (op == "-") {
           alert("Resultado: "+(n1 - n2));
        }
        if (op == "**") {
          alert("Resultado: "+Math.pow(n1,n2));
        }
        

//SALARIO FINANCIAMENTO

    var s, f;

        s = Number(prompt("Salário: "));    
        f = Number(prompt("Valor do financiamento: "));

        if (f <= s*5) {
            alert("Financiamento concedido!");
        }
        else {
            alert("Financiamento negado!");
        }
        alert("Obrigado por nos consultar!");

//problema do neto

    var sal, por, vg, skins

        vg = Number(prompt("valor que ela gastou: "));
        sal = Number(prompt("valor do salario: "));

        por = vg/sal*100
        skins = vg/50
        
        if (por >=100) {
            alert("parabéns vc entrou em falencia, pobi😋\ntudo isso em dinheiro pra "+skins+" roupinha\ngastou "+por+"% do salariokkkkkkkkkkkkkkkkkKKK");      
        }
        else {
            alert("ainda tem dinheiro sobrando hein, cade as skin....???!?\nsó comprou "+skins);
        }
                    
//666       
        
       
/*REALIZANDO VÁRIAS COMPARAÇÕES 


        operador E - &&
          if(media >= 7 && freq >= 7) {};
        operador OU - ||
          if(idade<18 || idade > 70) {};
*/


//Algoritmo "CONCEITOS"

    var conceito 
    
        conceito = String(prompt("Digite seu conceito (A, B, ou C): "));
    
        if(conceito != 'A' && conceito != 'B' && conceito != 'C') {
            alert("Digite apenas A, B, ou C");
        }
        else{
            if(conceito == 'A' || conceito == 'B') {
                alert("Aprovado!");
            }
            else {
                alert("Reprovado!");
            }
        }
        

//5

    var int

        int = parseInt(prompt("Digite um número inteiro: "));
        
        if (int > 0) {
            if (int%2 == 0) {
            alert("O número é par.");
            }
            else {
            alert("O número é ímpar.");
            }
        }
        if (int < 0) {
            alert("Este número não é positivo.");
        }
        else { alert("Zero não."); }



//LISTA 2

//1. MAIOR - MENOR

    var n1, n2

    n1 = parseInt(prompt("Digite o primeiro número: "));
    n2 = parseInt(prompt("Digite o segundo número: "));

    if (n1 > n2) {
    alert((n1-n2));
    }
    if (n1 < n2) {
    alert((n2-n1));
    }
    else {
    alert ("0");
    }

//2. FAIXA PERMITIDA

    var int

    int = parseInt(prompt("Digite um número inteiro: "));
    
    if (int >= 1 && int <=9) {
        alert("O valor está na faixa permitida.");
    }
    else { alert("O valor está fora da faixa permitida."); }
    
//3. EXTENSOOOO

    var int

    int = parseInt(prompt("Digite um número inteiro: "));
    
    if (int >= 0 && int <=10) {
        if (int == 0) { alert("ZERO"); }
        if (int == 1) { alert("UM"); }
        if (int == 2) { alert("DOIS"); }
        if (int == 3) { alert("TRÊS"); }
        if (int == 4) { alert("QUATRO"); }
        if (int == 5) { alert("CINCO"); }
        if (int == 6) { alert("SEIS"); }
        if (int == 7) { alert("SETE"); }
        if (int == 8) { alert("OITO"); }
        if (int == 9) { alert("NOVE"); }
        if (int == 10) { alert("DEZ"); }
    }
    else { alert("O valor está fora da faixa."); }

//4. IDADE ELEITORAL

    var idade
    
    idade = parseInt(prompt("Digite sua idade: "));
    
    if (idade < 16) { alert("NAO ELEITOR"); }
    if (idade >= 18 && idade < 65) { alert("ELEITOR OBRIGATÓRIO"); }
    if ((idade >= 16 && idade <= 18) || idade >= 65) { alert("ELEITOR FACULTATIVO"); }

//5. QUATRO VALORES / DIVISOR 2 E 3

    var n1, n2, n3, n4

    n1 = parseInt(prompt("N1: "));
    n2 = parseInt(prompt("N2: "));
    n3 = parseInt(prompt("N3: "));
    n4 = parseInt(prompt("N4: "));

    if (n1%2 == 0 && n1%3 == 0) { alert(n1); }
    if (n2%2 == 0 && n2%3 == 0) { alert(n2); }
    if (n3%2 == 0 && n3%3 == 0) { alert(n3); }
    if (n4%2 == 0 && n4%3 == 0) { alert(n4); }
    else { alert("ASDFHISDRGHVIOHDRGOID"); }

//6. FHUERGWUEI4RFGHVIWUERHGFHTRG

    var int; 
    
    int = parseInt(prompt("Digite um número inteiro: "));
    
    if (int > 0) { 
        alert((int/2));
    }
    else { 
        alert((int**2));
    }

//7. CINCO VALORES

    var n1,n2,n3,n4,n5;

    n1 = parseInt(prompt("N1: "));
    n2 = parseInt(prompt("N2: "));
    n3 = parseInt(prompt("N3: "));
    n4 = parseInt(prompt("N4: "));
    n5 = parseInt(prompt("N5: "));

    alert(Math.min(n1,n2,n3,n4,n5)+" "+Math.max(n1,n2,n3,n4,n5));

//8. SDUFHSDFJDUGDFIGD

    var int;

    int = parseInt(prompt("Digite um número inteiro: "));

    if (!(int>3)) { alert(int); }


//9. ANO BISSEXTO   

    var ano

    ano = parseInt(prompt("Digite um ano: "));
    
    if ((ano > 1584 && ano%400 == 0) || (ano%4 == 0 && ano%100 != 0)) {
        alert("O ano é bissexto.");
    }
    else { 
        alert("O ano não é bissexto.");
    }

//10. PREÇO E CODIGO

    var p, cod;

    p = Number(prompt("Digite o preço: "));
    cod = parseInt(prompt("Digite o código de origem: "));

    if (cod == 1) { cod = "Norte"; }
        else if (cod == 2 ||cod == 5 || cod == 9) { cod = "Sul"; }
            else if (cod == 3 || (cod >=10 && cod <=15)) { cod = "Leste"; }
                else if (cod == 7 ||cod == 20) { cod = "Oeste"; }
                    else { cod = "Importado"; }
    alert(cod);
  
//11. multiplo de 3

    var n

    n = Number(prompt("Digite um número: "));

    if (n%3 == 0) { alert("O número é múltiplo de 3"); }
    else { alert("Não é múltiplo de 3"); }  

//12. divisao exata

    var n1, n2

    n1 = Number(prompt("N1: "));
    n2 = Number(prompt("N2: "));

    if(n1%n2 == 0) { alert("A divisão de "+n1+" por "+n2+" é exata"); }
    else { alert("A divisão de "+n1+" por "+n2+" não é exata"); }


//13. val0or produt5tioe

    var v
    
    v = Number(prompt("Digite o valor: "));
    
    if (v < 20) { v = v + v*0.45; }
    else { v = v + v*0.3; }
    
    alert("O valor de venda é "+v);

//14. aumento salario
    
    var sal, p 
    
    sal = Number(prompt("Digite o valor do salário: "));

    if (sal > 0 && sal <= 400) { 
        sal += sal*0.15;
        p = 15;
    }
    else if (sal > 400 && sal <= 700) { 
        sal += sal*0.12;
        p = 12;
    }
    else if (sal > 700 && sal <= 1000) {
        sal += sal*0.10;
        p = 10;
    }
    else if (sal > 1000 && sal <= 1800) {
        sal += sal*0.07;
        p = 7; 
    }
    else if (sal > 1800 && sal <= 2500) {
        sal += sal*0.05;
        p = 5; 
    }
    
    alert("O percentual de aumento é de "+p+"%\n\n O salário corrigido é "+sal);

//15. linha de credito

    var sal, v;

    sal = Number(prompt("Digite o valor do salário: "));
    v = Number(prompt("Digite o valor da prestação: "));
    if (v > (sal*0.3)) { alert("nao concedido"); }
    else { alert("concedido"); }










                                                                                                                                        

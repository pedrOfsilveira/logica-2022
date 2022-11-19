

function generateTable() {
  var mont, jSimples, jComposto, lComposto, lSimples, capital, taxaS, taxaC, tempo, dif, c, lucroC, lucroS;

  

  jComposto = [];
  jSimples = [];
  lComposto = [];
  lSimples = [];
  lucroS = 0;
  lucroC = 0;

  capital = parseFloat(document.getElementById('capital').value);
  taxaS = parseFloat(document.getElementById('taxaS').value) / 100;
  taxaC = parseFloat(document.getElementById('taxaC').value) / 100;
  tempo = parseInt(document.getElementById('prazo').value);

  for (i = 1; i <= tempo; i++) {
    mont = capital * Math.pow(1 + taxaC, i);
    jComposto.push('R$' + mont.toFixed(2));
    jSimples.push('R$' + (capital + capital * taxaS * i).toFixed(2));
    lComposto.push(mont - capital);
    lSimples.push(capital * taxaS * i);
  }

  var myTableDiv = document.getElementById('divTabela');
  var table = document.createElement('table');
  var tabLen = document.getElementsByTagName('table');
  while (tabLen.length > 0) {
    tabLen[0].parentNode.removeChild(tabLen[0]);
  }

  var tableHead = document.createElement('THEAD');
  table.appendChild(tableHead);

  var tableBody = document.createElement('TBODY');
  tableBody.setAttribute('class','body');
  table.appendChild(tableBody);


  var tr = document.createElement('TR');
  tableHead.appendChild(tr);

  var td = document.createElement('TD');
  tableHead.appendChild(td);
  
  var th = document.createElement('TH');
  th.appendChild(document.createTextNode('Prazo (Meses)'));
  tr.appendChild(th);

  var th = document.createElement('TH');
  th.appendChild(document.createTextNode("Juros Simples"));
  tr.appendChild(th);

  var th = document.createElement('TH');
  th.appendChild(document.createTextNode("Juros Compostos"));
  tr.appendChild(th);

  
  
  for (var i = 0; i < tempo; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (j = 0; j < 3; j++) {
      var td = document.createElement('TD');
      switch (j) {
        case 0:
          td.appendChild(document.createTextNode(i));
          tr.appendChild(td);
          break;
        case 1:
          td.appendChild(document.createTextNode(jSimples[i]));
          tr.appendChild(td);
          break;
        case 2:
          td.appendChild(document.createTextNode(jComposto[i]));
          tr.appendChild(td);
      }
    }
  }
  myTableDiv.appendChild(table);

  for (i = 0; i < tempo;i++) {
  lucroS += lSimples[i];
  lucroC += lComposto[i];
  }

  if(lucroS > lucroC) {
      
    dif = (lucroS-lucroC).toFixed(2);
      
    document.getElementById('vantagem').innerHTML = ('Sua melhor opção de investimento durante o prazo informado é: Juros Simples!\n\nPois gera um lucro de R$'+ lucroS.toFixed(2)+', sendo R$'+dif+' maior que o lucro dos Juros Compostos (R$'+(lucroC.toFixed(2))+').');
      
    lucroC = 0;
    lucroS = 0;
    c = 0;

    while (lucroC <= lucroS) {
      mont = capital * Math.pow((1+taxaC),c);
      lucroS += (capital * taxaS * c);
      lucroC += (mont-capital);
      if(lucroC > lucroS) {
        vantagem = c;
      }
      c++;
    } 
    document.getElementById('dica').innerHTML = ('A opção de Juros Compostos começaria a render mais, apenas após '+vantagem+' meses de investimento.');
  } else {
    dif = (lucroC-lucroS).toFixed(2);

    document.getElementById('vantagem').innerHTML = ('Sua melhor opção de investimento durante o prazo informado é: Juros Compostos!\n\nPois gera um lucro de R$'+
    lucroC.toFixed(2)+', sendo R$'+dif+' maior que o lucro dos Juros Simples (R$'+lucroS.toFixed(2)+').');
  }
}

var generate = document.getElementById('generate');
generate.addEventListener('click', generateTable);


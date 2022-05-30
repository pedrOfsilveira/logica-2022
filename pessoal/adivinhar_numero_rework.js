var n, ans, lvl, modo, vida, vida1, vida2, dnv, c_errado;

dnv = 1;
c_errado = 0;

while (dnv == 1) {
  vida1 = 0
  vida2 = 0
  c_errado = 0;
  modo = 0;
  lvl = 0;
  n = parseInt(Math.random()*11);


  while (modo != 1 && modo != 2) { 
    modo = parseInt(prompt("Escolha um modo:\n1. 1 JOGADOR\n2. 2 JOGADORES"));
  }
  while (lvl != 1 && lvl != 2 && lvl != 3) {
    lvl = parseInt(prompt("Escolha um nível de dificuldade:\n 1. FÁCIL\n 2. MÉDIO\n 3. DIFÍCIL"));
  }

  //1 jogador
  
  if (modo == 1) {			
    if (lvl == 1) { 
      vida = 3;
      n = parseInt(Math.random()*11);
      ans = parseInt(prompt("Tente adivinhar um número de 0 a 10: "));
    }
    else if (lvl == 2) {
      vida = 5;
      n = parseInt(Math.random()*51);
      ans = parseInt(prompt("Tente adivinhar um número de 0 a 50: "));
    }
    else if (lvl == 3) {
      vida = 10;
      n = parseInt(Math.random()*101);
      ans = parseInt(prompt("Tente adivinhar um número de 0 a 100: "));
    }	
  }		

  while (vida > 1 && c_errado == 0) { 
    if (ans == n) { 
      alert("Você acertou!");
      c_errado = 1;
    }     
    else { 
      vida -= 1;
      alert("Você errou!\n\nVidas restantes: "+vida); 
      if (ans > n) { ans = parseInt(prompt("Muito alto!\nTente de novo: ")); }
      else { ans = parseInt(prompt("Muito baixo!\nTente de novo: ")); }
    }
  }

  if (vida <= 1) { alert("Você morreu!💀\nA resposta era: "+n)};	

  //2 jogadores		

  if (modo == 2) {
    if (lvl == 1) { 
      vida1 = 3;
      vida2 = 3;
      n = parseInt(Math.random()*11);
      ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 0 a 10: "));
    }
    else if (lvl == 2) {
      vida1 = 5;
      vida2 = 5;
      n = parseInt(Math.random()*51);
      ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 0 a 50: "));
    }
    else if (lvl == 3) {
      vida1 = 10;
      vida2 = 10;
      n = parseInt(Math.random()*101);
      ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 0 a 100: "));
    }	
  }
  while ((vida1 >= 1 || vida2 >= 1) && c_errado == 0) { 
    if (ans == n && c_errado != 1) { 
      alert("Jogador 1, parabéns. Você acertou!");
      c_errado = 1;
    }     
    else if (c_errado == 0) { 
      if (vida1 != 0) { vida1 -= 1; }
      if (vida1 == 0) { 
        alert("Jogador 1, você MORREU!\n\nVidas restantes: "+vida1);
        if (vida2 == 1) { ans = parseInt(prompt("Sua última tentativa, Jogador 2! Sem dicas. ")); }
      }
      else {
        alert("Jogador 1, você errou!\n\nVidas restantes: "+vida1); 
        if (ans > n) { ans = parseInt(prompt("Muito alto!\nSua vez, Jogador 2: ")); }
        else { ans = parseInt(prompt("Muito baixo!\nSua vez, Jogador 2: ")); }
      }
    }
    if (ans == n && c_errado != 1) { 
      alert("Jogador 2, parabéns. Você acertou!");
      c_errado = 1;
    }     
    else { 
      if (vida2 != 0) { vida2 -= 1; }
      if (vida2 == 0) {
        alert("Jogador 2, você MORREU!\n\nVidas restantes: "+vida2);
        if (vida1 == 1) { ans = parseInt(prompt("Sua última tentativa, Jogador 1! Sem dicas. ")); }
      }
      else if (c_errado == 0){
        alert("Jogador 2, você errou!\n\nVidas restantes: "+vida2); 
        if (ans > n) { ans = parseInt(prompt("Muito alto!\nSua vez, Jogador 1: ")); }
        else { ans = parseInt(prompt("Muito baixo!\nSua vez, Jogador 1: ")); }
      }				
    }
  }	
  dnv = String(prompt("Deseja tentar novamente?\n1.Sim\n2.Não")); 
}







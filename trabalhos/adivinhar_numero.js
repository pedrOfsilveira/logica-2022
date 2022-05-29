//jogo adivinhação


var n, ans, vida, vida1, vida2, lvl, modo;

vida = 3;
vida1 = 3;
vida2 = 3;

modo = parseInt(prompt("Escolha um modo:\n1. 1 JOGADOR\n2. 2 JOGADORES"));
lvl = parseInt(prompt("Escolha um nível de dificuldade:\n 1. FÁCIL\n 2. MÉDIO\n 3. DIFÍCIL"));

//1 jogador
if (modo == 1) {

    if (lvl == 1) { 
        n = parseInt(Math.random()*11);
        ans = parseInt(prompt("Tente adivinhar um número de 1 a 10: "));
    }
    else if (lvl == 2) {
        n = parseInt(Math.random()*51);
        ans = parseInt(prompt("Tente adivinhar um número de 1 a 50: "));
    }
    else if (lvl == 3) {
        n = parseInt(Math.random()*101);
        ans = parseInt(prompt("Tente adivinhar um número de 1 a 100: "));
    }
    else {
        alert("Digite algo válido!");
    }

    

   
    if (ans == n) { alert("Você acertou!"); }
    
    else { 
        vida -= 1;
        alert("Você errou!\n\nVidas restantes: "+vida); 

        if (ans > n) { ans = parseInt(prompt("Muito alto!\nTente de novo: ")); }
        else { ans = parseInt(prompt("Muito baixo!\nTente de novo: ")); }
        
        
        if (ans == n) { 
            alert("Você acertou!"); 
        }

        else {
            vida -= 1 
            alert("Você errou!\n\nVidas restantes: "+vida);
            
            if (ans > n) { ans = parseInt(prompt("Muito alto!\nTente de novo: ")); }
            else { ans = parseInt(prompt("Muito baixo!\nTente de novo: ")); }
            
            if (ans == n) { 
                alert("Você acertou!"); 
            }

            else {
                vida -= 1 
                alert("Você MORREU! A resposta era "+n+"\n\nVidas restantes: "+vida);
               
                
            }
        }
    }
} 
//2 jogadores
else if (modo == 2) {

    if (lvl == 1) { 
            n = parseInt(Math.random()*11);
            ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 1 a 10: "));
        }
        else if (lvl == 2) {
            n = parseInt(Math.random()*51);
            ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 1 a 50: "));
        }
        else if (lvl == 3) {
            n = parseInt(Math.random()*101);
            ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 1 a 100: "));
        }
        else {
            alert("Digite algo válido!");
        }

    

   
    if (ans == n) { alert("Jogador 1: Você acertou!"); }
    
    else { 
        vida1 -= 1;
        alert("Jogador 1: Você errou!\n\nVidas restantes: "+vida1); 

        if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 2: Sua tentativa! ")); }
        else { ans = parseInt(prompt("Muito baixo!\n Jogador 1: Sua tentativa! ")); }
        
        
        if (ans == n) { 
            alert("Jogador 2: Você acertou!"); 
        }

        else {
            vida2 -= 1; 
            alert("Jogador 2: Você errou!\n\nVidas restantes: "+vida2);
            
            if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 1: Sua tentativa! ")); }
            else { ans = parseInt(prompt("Muito baixo!\nJogador 1: Sua tentativa! ")); }
            
            if (ans == n) { 
                alert("Jogador 1: Você acertou!"); 
            }

            else {
                vida1 -= 1; 
                alert("Jogador 1: Você errou!\n\nVidas restantes: "+vida1); 

                if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 2: Sua tentativa! ")); }
                else { ans = parseInt(prompt("Muito baixo!\n Jogador 2: Sua tentativa! ")); }
        
        
                if (ans == n) { 
                    alert("Jogador 2: Você acertou!"); 
                }
                
                else {
                vida2 -= 1; 
                alert("Jogador 2: Você errou!\n\nVidas restantes: "+vida2);
                
                if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 1: Sua tentativa! ")); }
                else { ans = parseInt(prompt("Muito baixo!\nJogador 1: Sua tentativa! ")); }
                
                if (ans == n) { 
                    alert("Jogador 1: Você acertou!"); 
                }

                    else {
                        vida1 -= 1; 
                        alert("Jogador 1: Você MORREU!💀\n\nVidas restantes: "+vida1); 

                        if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 2: Sua tentativa! ")); }
                        else { ans = parseInt(prompt("Muito baixo!\n Jogador 1: Sua tentativa! ")); }
                
                
                        if (ans == n) { 
                        alert("Jogador 2: Você acertou!"); 
                        }
                        
                        else { 
                            vida2 -= 1;
                            alert("Jogador 2: Você MORREU!💀\n\nVidas restantes: "+vida2+"\nA RESPOSTA ERA: "+n);
                        }
                    }                 
                }                                 
            }
        }
    }
}
//SEGUNDA RODADA 
vida = 3;
vida1 = 3;
vida2 = 3;  
modo = parseInt(prompt("Escolha um modo:\n1. 1 JOGADOR\n2. 2 JOGADORES"));
lvl = parseInt(prompt("Escolha um nível de dificuldade:\n 1. FÁCIL\n 2. MÉDIO\n 3. DIFÍCIL"));

//1 jogador
if (modo == 1) {

    if (lvl == 1) { 
        n = parseInt(Math.random()*11);
        ans = parseInt(prompt("Tente adivinhar um número de 1 a 10: "));
    }
    else if (lvl == 2) {
        n = parseInt(Math.random()*51);
        ans = parseInt(prompt("Tente adivinhar um número de 1 a 50: "));
    }
    else if (lvl == 3) {
        n = parseInt(Math.random()*101);
        ans = parseInt(prompt("Tente adivinhar um número de 1 a 100: "));
    }
    else {
        alert("Digite algo válido!");
    }

    

   
    if (ans == n) { alert("Você acertou!"); }
    
    else { 
        vida -= 1;
        alert("Você errou!\n\nVidas restantes: "+vida); 

        if (ans > n) { ans = parseInt(prompt("Muito alto!\nTente de novo: ")); }
        else { ans = parseInt(prompt("Muito baixo!\nTente de novo: ")); }
        
        
        if (ans == n) { 
            alert("Você acertou!"); 
        }

        else {
            vida -= 1 
            alert("Você errou!\n\nVidas restantes: "+vida);
            
            if (ans > n) { ans = parseInt(prompt("Muito alto!\nTente de novo: ")); }
            else { ans = parseInt(prompt("Muito baixo!\nTente de novo: ")); }
            
            if (ans == n) { 
                alert("Você acertou!"); 
            }

            else {
                vida -= 1 
                alert("Você MORREU! A resposta era "+n+"\n\nVidas restantes: "+vida);
               
                
            }
        }
    }
} 
//2 jogadores
else if (modo == 2) {

    if (lvl == 1) { 
            n = parseInt(Math.random()*11);
            ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 1 a 10: "));
        }
        else if (lvl == 2) {
            n = parseInt(Math.random()*51);
            ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 1 a 50: "));
        }
        else if (lvl == 3) {
            n = parseInt(Math.random()*101);
            ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 1 a 100: "));
        }
        else {
            alert("Digite algo válido!");
        }

    

   
    if (ans == n) { alert("Jogador 1: Você acertou!"); }
    
    else { 
        vida1 -= 1;
        alert("Jogador 1: Você errou!\n\nVidas restantes: "+vida1); 

        if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 2: Sua tentativa! ")); }
        else { ans = parseInt(prompt("Muito baixo!\n Jogador 1: Sua tentativa! ")); }
        
        
        if (ans == n) { 
            alert("Jogador 2: Você acertou!"); 
        }

        else {
            vida2 -= 1; 
            alert("Jogador 2: Você errou!\n\nVidas restantes: "+vida2);
            
            if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 1: Sua tentativa! ")); }
            else { ans = parseInt(prompt("Muito baixo!\nJogador 1: Sua tentativa! ")); }
            
            if (ans == n) { 
                alert("Jogador 1: Você acertou!"); 
            }

            else {
                vida1 -= 1; 
                alert("Jogador 1: Você errou!\n\nVidas restantes: "+vida1); 

                if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 2: Sua tentativa! ")); }
                else { ans = parseInt(prompt("Muito baixo!\n Jogador 2: Sua tentativa! ")); }
        
        
                if (ans == n) { 
                    alert("Jogador 2: Você acertou!"); 
                }
                
                else {
                vida2 -= 1; 
                alert("Jogador 2: Você errou!\n\nVidas restantes: "+vida2);
                
                if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 1: Sua tentativa! ")); }
                else { ans = parseInt(prompt("Muito baixo!\nJogador 1: Sua tentativa! ")); }
                
                if (ans == n) { 
                    alert("Jogador 1: Você acertou!"); 
                }

                    else {
                        vida1 -= 1; 
                        alert("Jogador 1: Você MORREU!💀\n\nVidas restantes: "+vida1); 

                        if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 2: Sua tentativa! ")); }
                        else { ans = parseInt(prompt("Muito baixo!\n Jogador 1: Sua tentativa! ")); }
                
                
                        if (ans == n) { 
                        alert("Jogador 2: Você acertou!"); 
                        }
                        
                        else { 
                            vida2 -= 1;
                            alert("Jogador 2: Você MORREU!💀\n\nVidas restantes: "+vida2+"\nA RESPOSTA ERA: "+n);
                        }
                    }                 
                }                                 
            }
        }
    }
}       
//TERCEIRA RODADA
vida = 3;
vida1 = 3;
vida2 = 3;

modo = parseInt(prompt("Escolha um modo:\n1. 1 JOGADOR\n2. 2 JOGADORES"));
lvl = parseInt(prompt("Escolha um nível de dificuldade:\n 1. FÁCIL\n 2. MÉDIO\n 3. DIFÍCIL"));

//1 jogador
if (modo == 1) {

    if (lvl == 1) { 
        n = parseInt(Math.random()*11);
        ans = parseInt(prompt("Tente adivinhar um número de 1 a 10: "));
    }
    else if (lvl == 2) {
        n = parseInt(Math.random()*51);
        ans = parseInt(prompt("Tente adivinhar um número de 1 a 50: "));
    }
    else if (lvl == 3) {
        n = parseInt(Math.random()*101);
        ans = parseInt(prompt("Tente adivinhar um número de 1 a 100: "));
    }
    else {
        alert("Digite algo válido!");
    }

    

   
    if (ans == n) { alert("Você acertou!"); }
    
    else { 
        vida -= 1;
        alert("Você errou!\n\nVidas restantes: "+vida); 

        if (ans > n) { ans = parseInt(prompt("Muito alto!\nTente de novo: ")); }
        else { ans = parseInt(prompt("Muito baixo!\nTente de novo: ")); }
        
        
        if (ans == n) { 
            alert("Você acertou!"); 
        }

        else {
            vida -= 1 
            alert("Você errou!\n\nVidas restantes: "+vida);
            
            if (ans > n) { ans = parseInt(prompt("Muito alto!\nTente de novo: ")); }
            else { ans = parseInt(prompt("Muito baixo!\nTente de novo: ")); }
            
            if (ans == n) { 
                alert("Você acertou!"); 
            }

            else {
                vida -= 1 
                alert("Você MORREU! A resposta era "+n+"\n\nVidas restantes: "+vida);
               
                
            }
        }
    }
} 
//2 jogadores
else if (modo == 2) {

    if (lvl == 1) { 
            n = parseInt(Math.random()*11);
            ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 1 a 10: "));
        }
        else if (lvl == 2) {
            n = parseInt(Math.random()*51);
            ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 1 a 50: "));
        }
        else if (lvl == 3) {
            n = parseInt(Math.random()*101);
            ans = parseInt(prompt("Jogador 1: Tente adivinhar um número de 1 a 100: "));
        }
        else {
            alert("Digite algo válido!");
        }

    

   
    if (ans == n) { alert("Jogador 1: Você acertou!"); }
    
    else { 
        vida1 -= 1;
        alert("Jogador 1: Você errou!\n\nVidas restantes: "+vida1); 

        if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 2: Sua tentativa! ")); }
        else { ans = parseInt(prompt("Muito baixo!\n Jogador 1: Sua tentativa! ")); }
        
        
        if (ans == n) { 
            alert("Jogador 2: Você acertou!"); 
        }

        else {
            vida2 -= 1; 
            alert("Jogador 2: Você errou!\n\nVidas restantes: "+vida2);
            
            if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 1: Sua tentativa! ")); }
            else { ans = parseInt(prompt("Muito baixo!\nJogador 1: Sua tentativa! ")); }
            
            if (ans == n) { 
                alert("Jogador 1: Você acertou!"); 
            }

            else {
                vida1 -= 1; 
                alert("Jogador 1: Você errou!\n\nVidas restantes: "+vida1); 

                if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 2: Sua tentativa! ")); }
                else { ans = parseInt(prompt("Muito baixo!\n Jogador 2: Sua tentativa! ")); }
        
        
                if (ans == n) { 
                    alert("Jogador 2: Você acertou!"); 
                }
                
                else {
                vida2 -= 1; 
                alert("Jogador 2: Você errou!\n\nVidas restantes: "+vida2);
                
                if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 1: Sua tentativa! ")); }
                else { ans = parseInt(prompt("Muito baixo!\nJogador 1: Sua tentativa! ")); }
                
                if (ans == n) { 
                    alert("Jogador 1: Você acertou!"); 
                }

                    else {
                        vida1 -= 1; 
                        alert("Jogador 1: Você MORREU!💀\n\nVidas restantes: "+vida1); 

                        if (ans > n) { ans = parseInt(prompt("Muito alto!\nJogador 2: Sua tentativa! ")); }
                        else { ans = parseInt(prompt("Muito baixo!\n Jogador 1: Sua tentativa! ")); }
                
                
                        if (ans == n) { 
                        alert("Jogador 2: Você acertou!"); 
                        }
                        
                        else { 
                            vida2 -= 1;
                            alert("Jogador 2: Você MORREU!💀\n\nVidas restantes: "+vida2+"\nA RESPOSTA ERA: "+n);
                        }
                    }                 
                }                                 
            }
        }
    }
}   
alert("Obrigado por jogar!");
alert("SUDPREHEGH48534T8UY34HFGUERHGEORSEX0HGUEIGHIEHORG4785Y34590T34TU");



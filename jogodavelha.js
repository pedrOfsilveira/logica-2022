var team1, team2, pos1, pos2, board, win, valid;

win = 0;
valid = 0;

board = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]
team1 = parseInt(prompt("Escolha seu time: \n1 \n2"));

if (team1 == 1) {
  team2 = 2; 
}
else if (team1 == 2) {
  team2 = 1;
}

while (win == 0) {

  while (valid == 0) {
  pos1 = parseInt(prompt("Jogador 1, Escolha uma posição:\n0  1  2\n3  4  5\n6  7  8"));
  
    if (pos1 == 0 || pos1 == 1 || pos1 == 2) {
      if (board[0][pos1] == 0) { board[0][pos1] = team1; valid = 1; }
      
    }
    else if (pos1 == 3 || pos1 == 4 || pos1 == 5) {
      if (pos1 == 3 && board[1][0] == 0) { board[1][0] = team1; valid = 1;}
      else if (pos1 == 4 && board[1][1] == 0) { board[1][1] = team1; valid = 1; }
      else if (pos1 == 5 && board[1][2] == 0) { board[1][2] = team1; valid = 1; }
    }
    else if (pos1 == 6 || pos1 == 7 || pos1 == 8) {
      if (pos1 == 6 && board[2][0] == 0) { board[2][0] = team1; valid = 1; }
      else if (pos1 == 7 && board[2][1] == 0) { board[2][1] = team1; valid = 1; }
      else if (pos1 == 8 && board[2][2] == 0) { board[2][2] = team1; valid = 1; }
    }
  }
  valid = 0;
  alert(board[0]+"\n"+board[1]+"\n"+board[2]);
  
  //win 1
  if (board[0][0] == team1 && board[1][1] == team1 && board[2][2] == team1) {
    win = 1;
    alert("Jogador 1, você ganhou!");
  }
  else if (board[0][2] == team1 && board[1][1] == team1 && board[2][0] == team1) {
    win = 1;
    alert("Jogador 1, você ganhou!");
  }
  else if (board[0][0] == team1 && board[1][0] == team1 && board[2][0] == team1) {
    win = 1;
    alert("Jogador 1, você ganhou!");
  }
  else if (board[0][1] == team1 && board[1][1] == team1 && board[2][1] == team1) {
    win = 1;
    alert("Jogador 1, você ganhou!");
  }
  else if (board[0][2] == team1 && board[1][2] == team1 && board[2][2] == team1) {
    win = 1;
    alert("Jogador 1, você ganhou!");
  }
  else if (board[0][0] == team1 && board[0][1] == team1 && board[0][2] == team1) {
    win = 1;
    alert("Jogador 1, você ganhou!");
  }
  else if (board[1][0] == team1 && board[1][1] == team1 && board[1][2] == team1) {
    win = 1;
    alert("Jogador 1, você ganhou!");
  }
  else if (board[2][0] == team1 && board[2][1] == team1 && board[2][2] == team1) {
    win = 1;
    alert("Jogador 1, você ganhou!");
  }
  else if (board[0].includes(0) == false && board[1].includes(0) == false && board[2].includes(0) == false) { 
    win = 1;
    alert("Velha!");
  }

  if (win == 0) {
    
    while (valid == 0) {
    pos2 = parseInt(prompt("Jogador 2, Escolha uma posição:\n0  1  2\n3  4  5\n6  7  8"));
    
      if (pos2 == 0 || pos2 == 1 || pos2 == 2) {
        if (board[0][pos2] == 0) { board[0][pos2] = team2; valid = 1; }
      }
      else if (pos2 == 3 || pos2 == 4 || pos2 == 5) {
        if (pos2 == 3 && board[1][0] == 0) { board[1][0] = team2; valid = 1;}
        else if (pos2 == 4 && board[1][1] == 0) { board[1][1] = team2; valid = 1; }
        else if (pos2 == 5 && board[1][2] == 0) { board[1][2] = team2; valid = 1; }
      }
      else if (pos2 == 6 || pos2 == 7 || pos2 == 8) {
        if (pos2 == 6 && board[2][0] == 0) { board[2][0] = team2; valid = 1; }
        else if (pos2 == 7 && board[2][1] == 0) { board[2][1] = team2; valid = 1; }
        else if (pos2 == 8 && board[2][2] == 0) { board[2][2] = team2; valid = 1; }
      }
    }
  }
  valid = 0;
  alert(board[0]+"\n"+board[1]+"\n"+board[2]);

  //win 2
  if (board[0][0] == team2 && board[1][1] == team2 && board[2][2] == team2) {
    win = 1;
    alert("Jogador 2, você ganhou!");
  }
  else if (board[0][2] == team2 && board[1][1] == team2 && board[2][0] == team2) {
    win = 1;
    alert("Jogador 2, você ganhou!");
  }
  else if (board[0][0] == team2 && board[1][0] == team2 && board[2][0] == team2) {
    win = 1;
    alert("Jogador 2, você ganhou!");
  }
  else if (board[0][1] == team2 && board[1][1] == team2 && board[2][1] == team2) {
    win = 1;
    alert("Jogador 2, você ganhou!");
  }
  else if (board[0][2] == team2 && board[1][2] == team2 && board[2][2] == team2) {
    win = 1;
    alert("Jogador 2, você ganhou!");
  }
  else if (board[0][0] == team2 && board[0][1] == team2 && board[0][2] == team2) {
    win = 1;
    alert("Jogador 2, você ganhou!");
  }
  else if (board[1][0] == team2 && board[1][1] == team2 && board[1][2] == team2) {
    win = 1;
    alert("Jogador 2, você ganhou!");
  }
  else if (board[2][0] == team2 && board[2][1] == team2 && board[2][2] == team2) {
    win = 1;
    alert("Jogador 2, você ganhou!");
  }
  else if (board.includes(0) == false && board[1].includes(0) == false && board[2].includes(0) == false) { 
    win = 1;
    alert("Velha!");
  }
}



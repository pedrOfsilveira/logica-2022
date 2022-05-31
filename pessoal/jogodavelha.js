var team1, team2, pos1, pos2, board, win, valid;

again = 1;

while (again == 1) {
  win = 0;
  valid = 0;
  board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
  ];

  do {
  team1 = String(prompt('Escolha seu time (O ou X): '));
  } while (team1 !== 'o' && team1 !== 'O' && team1 !== 'x' && team1 !== 'X');

  if (team1 == 'O' || team1 == 'o') {
    team1 = 'O';
    team2 = 'X';
  } else if (team1 == 'X' || team1 == 'x') {
    team1 = 'X';
    team2 = 'O';
  }

  while (win == 0) {
    while (valid == 0) {
      pos1 = parseInt(
        prompt('Jogador 1, Escolha uma posição:\n0  1  2\n3  4  5\n6  7  8')
      );

      if (pos1 == 0 || pos1 == 1 || pos1 == 2) {
        if (board[0][pos1] == '-') {
          board[0][pos1] = team1;
          valid = 1;
        }
      } else if (pos1 == 3 || pos1 == 4 || pos1 == 5) {
        if (pos1 == 3 && board[1][0] == '-') {
          board[1][0] = team1;
          valid = 1;
        } else if (pos1 == 4 && board[1][1] == '-') {
          board[1][1] = team1;
          valid = 1;
        } else if (pos1 == 5 && board[1][2] == '-') {
          board[1][2] = team1;
          valid = 1;
        }
      } else if (pos1 == 6 || pos1 == 7 || pos1 == 8) {
        if (pos1 == 6 && board[2][0] == '-') {
          board[2][0] = team1;
          valid = 1;
        } else if (pos1 == 7 && board[2][1] == '-') {
          board[2][1] = team1;
          valid = 1;
        } else if (pos1 == 8 && board[2][2] == '-') {
          board[2][2] = team1;
          valid = 1;
        }
      }
    }
    valid = 0;
    for (i = 0, aux = []; i < board.length; i++) {
      aux.push(board[i].join(' '));
    }
    alert(aux.join('\n'));

    //win 1
    if (board[0][0] == team1 && board[1][1] == team1 && board[2][2] == team1) {
      win = 1;
      alert('Jogador 1, você ganhou!');
    } else if (
      board[0][2] == team1 &&
      board[1][1] == team1 &&
      board[2][0] == team1
    ) {
      win = 1;
      alert('Jogador 1, você ganhou!');
    } else if (
      board[0][0] == team1 &&
      board[1][0] == team1 &&
      board[2][0] == team1
    ) {
      win = 1;
      alert('Jogador 1, você ganhou!');
    } else if (
      board[0][1] == team1 &&
      board[1][1] == team1 &&
      board[2][1] == team1
    ) {
      win = 1;
      alert('Jogador 1, você ganhou!');
    } else if (
      board[0][2] == team1 &&
      board[1][2] == team1 &&
      board[2][2] == team1
    ) {
      win = 1;
      alert('Jogador 1, você ganhou!');
    } else if (
      board[0][0] == team1 &&
      board[0][1] == team1 &&
      board[0][2] == team1
    ) {
      win = 1;
      alert('Jogador 1, você ganhou!');
    } else if (
      board[1][0] == team1 &&
      board[1][1] == team1 &&
      board[1][2] == team1
    ) {
      win = 1;
      alert('Jogador 1, você ganhou!');
    } else if (
      board[2][0] == team1 &&
      board[2][1] == team1 &&
      board[2][2] == team1
    ) {
      win = 1;
      alert('Jogador 1, você ganhou!');
    } else if (
      board[0].includes('-') == false &&
      board[1].includes('-') == false &&
      board[2].includes('-') == false
    ) {
      win = 1;
      alert('Velha!');
    }

    if (win == 0) {
      while (valid == 0) {
        pos2 = parseInt(
          prompt('Jogador 2, Escolha uma posição:\n0  1  2\n3  4  5\n6  7  8')
        );

        if (pos2 == 0 || pos2 == 1 || pos2 == 2) {
          if (board[0][pos2] == '-') {
            board[0][pos2] = team2;
            valid = 1;
          }
        } else if (pos2 == 3 || pos2 == 4 || pos2 == 5) {
          if (pos2 == 3 && board[1][0] == '-') {
            board[1][0] = team2;
            valid = 1;
          } else if (pos2 == 4 && board[1][1] == '-') {
            board[1][1] = team2;
            valid = 1;
          } else if (pos2 == 5 && board[1][2] == '-') {
            board[1][2] = team2;
            valid = 1;
          }
        } else if (pos2 == 6 || pos2 == 7 || pos2 == 8) {
          if (pos2 == 6 && board[2][0] == '-') {
            board[2][0] = team2;
            valid = 1;
          } else if (pos2 == 7 && board[2][1] == '-') {
            board[2][1] = team2;
            valid = 1;
          } else if (pos2 == 8 && board[2][2] == '-') {
            board[2][2] = team2;
            valid = 1;
          }
        }
      }
    }
    valid = 0;
    for (i = 0, aux = []; i < board.length; i++) {
      aux.push(board[i].join(' '));
    }
    alert(aux.join('\n'));

    //win 2
    if (board[0][0] == team2 && board[1][1] == team2 && board[2][2] == team2) {
      win = 1;
      alert('Jogador 2, você ganhou!');
    } else if (
      board[0][2] == team2 &&
      board[1][1] == team2 &&
      board[2][0] == team2
    ) {
      win = 1;
      alert('Jogador 2, você ganhou!');
    } else if (
      board[0][0] == team2 &&
      board[1][0] == team2 &&
      board[2][0] == team2
    ) {
      win = 1;
      alert('Jogador 2, você ganhou!');
    } else if (
      board[0][1] == team2 &&
      board[1][1] == team2 &&
      board[2][1] == team2
    ) {
      win = 1;
      alert('Jogador 2, você ganhou!');
    } else if (
      board[0][2] == team2 &&
      board[1][2] == team2 &&
      board[2][2] == team2
    ) {
      win = 1;
      alert('Jogador 2, você ganhou!');
    } else if (
      board[0][0] == team2 &&
      board[0][1] == team2 &&
      board[0][2] == team2
    ) {
      win = 1;
      alert('Jogador 2, você ganhou!');
    } else if (
      board[1][0] == team2 &&
      board[1][1] == team2 &&
      board[1][2] == team2
    ) {
      win = 1;
      alert('Jogador 2, você ganhou!');
    } else if (
      board[2][0] == team2 &&
      board[2][1] == team2 &&
      board[2][2] == team2
    ) {
      win = 1;
      alert('Jogador 2, você ganhou!');
    } else if (
      win != 1 &&
      board.includes('-') == false &&
      board[1].includes('-') == false &&
      board[2].includes('-') == false
    ) {
      win = 1;
      alert('Velha!');
    }
  }
  again = parseInt(prompt("Deseja jogar de novo?\n1. Sim\n2. Não"));
}
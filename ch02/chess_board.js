var chess_board = "";

for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    chess_board += (i + j) % 2 == 0 ? ' ' : '#';
  }
  chess_board += '\n';
}

console.log(chess_board);

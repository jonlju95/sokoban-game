const setupPlayerMovement = () => {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
      case "w":
        checkVerticalPlayerMovement(-1);
        break;
      case "ArrowDown":
      case "s":
        checkVerticalPlayerMovement(1);
        break;
      case "ArrowLeft":
      case "a":
        checkHorizontalPlayerMovement(-1);
        break;
      case "ArrowRight":
      case "d":
        checkHorizontalPlayerMovement(1);
        break;
      default:
        break;
    }
  });
}

const checkVerticalPlayerMovement = (direction) => {
  let board = tileMap01.mapGrid;

  let playerPosition = findPlayerIndex(board);
  let newPosition = checkTargetTile([playerPosition[0] + direction, playerPosition[1]]);

  if (playerPosition !== undefined && newPosition) {
    board[playerPosition[0]][playerPosition[1]][0] = ' ';
    board[playerPosition[0] + direction][playerPosition[1]][0] = 'P';
    redrawBoard(board);
  }
}

const checkHorizontalPlayerMovement = (direction) => {
  let board = tileMap01.mapGrid;

  let playerPosition = findPlayerIndex(board);
  let newPosition = checkTargetTile([playerPosition[0], playerPosition[1] + direction]);

  if (playerPosition !== undefined && newPosition) {
    let oldPosition = board[playerPosition[0]][playerPosition[1]][0];
    board[playerPosition[0]][playerPosition[1]][0] = ' ';
    board[playerPosition[0]][playerPosition[1] + direction][0] = 'P';
    redrawBoard(board);
  }
}

const findPlayerIndex = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j][0] === 'P') {
        return [i, j];
      }
    }
  }
  return null;
}

const checkTargetTile = (position) => {
  return tileMap01.mapGrid[position[0]][position[1]][0] !== 'W';
}

setupPlayerMovement();

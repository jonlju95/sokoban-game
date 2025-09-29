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
  let playerPosition = findPlayerIndex(board);
  let target = [playerPosition[0] + direction, playerPosition[1]];
  let next = [playerPosition[0] + (direction * 2), playerPosition[1]];

  if (checkPlayerMovement(playerPosition, target, next) !== playerPosition) {
    redrawBoard();
  }
}

const checkHorizontalPlayerMovement = (direction) => {
  let playerPosition = findPlayerIndex(board);
  let target = [playerPosition[0], playerPosition[1] + direction];
  let next = [playerPosition[0], playerPosition[1] + (direction * 2)];

  if (checkPlayerMovement(playerPosition, target, next) !== playerPosition) {
    redrawBoard();
  }
}

const checkPlayerMovement = (playerPos, target, next) => {
  let currentTile = board[playerPos[0]][[playerPos[1]]];
  let targetTile = board[target[0]][target[1]];

  if (targetTile.entity === 'B') {
    const nextTile = board[next[0]][next[1]];
    if(nextTile.entity === null && nextTile.base !== 'W') {
      nextTile.entity = 'B';
      targetTile.entity = 'P';
      currentTile.entity = null;
      return target;
    }
  } else if (targetTile.base !== 'W' && targetTile.entity === null) {
    targetTile.entity = 'P';
    currentTile.entity = null;
    return target;
  }
  return playerPos;
}

const findPlayerIndex = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j].entity === 'P') {
        return [i, j];
      }
    }
  }
  return null;
}

setupPlayerMovement();

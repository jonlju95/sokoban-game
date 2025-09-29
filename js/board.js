const createBoardFromBoardArray = () => {
  let boardArray = [];
  for (let i = 0; i < tileMap01.mapGrid.length; i++) {
    boardArray.push([]);
    for (let j = 0; j < tileMap01.mapGrid[i].length; j++) {
      if (tileMap01.mapGrid[i][j][0] === ' ' || tileMap01.mapGrid[i][j][0] === 'G' || tileMap01.mapGrid[i][j][0] === 'W') {
        boardArray[i].push({base: tileMap01.mapGrid[i][j][0], entity: null});
      } else {
        boardArray[i].push({base: ' ', entity: tileMap01.mapGrid[i][j][0]});
      }
    }
  }
  return boardArray;
}

const createBoard = () => {
  let boardSection = document.getElementsByClassName("boardSection")[0];

  boardSection.style.display = "grid";
  boardSection.style.gridTemplateColumns = `repeat(${tileMap01.width}, 1fr)`;
  boardSection.style.gridTemplateRows = `repeat(${tileMap01.height}, 1fr)`;

  renderBoard();
}

const redrawBoard = () => {
  document.getElementsByClassName("boardSection")[0].innerHTML = "";
  renderBoard();
  checkForCompletion();
}

const resetBoard = () => {
  board = createBoardFromBoardArray();
  document.getElementsByClassName("boardSection")[0].innerHTML = "";
  renderBoard();
}

const renderBoard = () => {
  let boardSection = document.getElementsByClassName("boardSection")[0];

  for (let row of board) {
    for (let cell of row) {
      const tile = document.createElement("div");
      tile.classList.add("tile");

      if (cell.base === "G" && cell.entity === "B") {
        tile.classList.add(Entities.BlockDone);
      } else if (cell.entity) {
        tile.classList.add(
          cell.entity === "P" ? Entities.Character : Entities.Block
        );
      } else {
        const baseClass = {
          W: Tiles.Wall,
          G: Tiles.Goal,
          " ": Tiles.Space
        }[cell.base];
        if (baseClass) tile.classList.add(baseClass);
      }

      boardSection.appendChild(tile);
    }
  }
}

const checkForCompletion = () => {
  let filledGoalTiles = 0;
  board.forEach((row) => {
    row.forEach(tile => {
      if (tile.base === "G" && tile.entity === "B") {
        filledGoalTiles += 1;
      }
    })
  })

  if (filledGoalTiles === 6) {
    console.log("Solved");
  }
}

let board = createBoardFromBoardArray();
createBoard();

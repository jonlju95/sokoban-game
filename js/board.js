const createBoard = () => {
  let boardSection = document.getElementsByClassName("boardSection")[0];

  boardSection.style.display = "grid";
  boardSection.style.gridTemplateColumns = `repeat(${tileMap01.width}, 1fr)`;
  boardSection.style.gridTemplateRows = `repeat(${tileMap01.height}, 1fr)`;

  drawBoard(tileMap01.mapGrid);
}

const redrawBoard = (boardArray) => {
  document.getElementsByClassName("boardSection")[0].innerHTML = "";

  drawBoard(boardArray);
}


const drawBoard = (boardArray) => {
  let boardSection = document.getElementsByClassName("boardSection")[0];

  for (let i = 0; i < boardArray.length; i++) {
    for (let j = 0; j < boardArray[i].length; j++) {
      let tile = document.createElement("div");
      tile.classList.add("tile");

      if (boardArray[i][j][0] !== " ") {
        tile.classList.add(boardArray[i][j][0]);
      }
      boardSection.appendChild(tile);
    }
  }
}

createBoard();

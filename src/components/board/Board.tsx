import './Board.css'
import { tileMap01 } from '../../js/SokobanBase.js';
import Tile from "../tile/Tile";

function Board() {
  const boardArray: any[] = createBoardFromBoardArray().map((tile, i) =>
    tile.map((item, j) =>
      <Tile key={i + "" + j} classes={"tile-wall"}/>
    )
  );


  console.log(boardArray);
  return (
    <section className="boardSection">
      {boardArray}
    </section>
)}

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
  console.log(boardArray);
  return boardArray;
}

export default Board;

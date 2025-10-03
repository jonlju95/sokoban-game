import './Instructions.css'

function Instructions() {
  return (
    <section className="instructionsSection">
      <div className="instructions">
        <h1>Sokoban</h1>
        <h2>Instructions</h2>
        <p>Move using the arrow keys or WASD. Get all blocks over to the goal tiles to solve</p>
        <button>Reset</button>
        <p id="movesCounter">Number of moves: 0</p>
      </div>
    </section>
  )
}

export default Instructions;

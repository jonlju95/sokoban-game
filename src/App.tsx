import {useState} from 'react'
import './App.css'
import Board from "./components/board/Board";
import Instructions from "./components/instructions/Instructions";

function App() {
  return (
    <>
      <main>
        <Board/>
        <Instructions/>
      </main>
    </>
  )
}

export default App

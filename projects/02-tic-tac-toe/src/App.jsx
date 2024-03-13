import { useState } from 'react';
import confetti from 'canvas-confetti';

import { Square } from './components/Square';
import { TURNS, WINNER_COMBOS } from './constants';

export function App() {

  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem('board');
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn');
    return savedTurn ? JSON.parse(savedTurn) : TURNS.X;
  });

  // null = no winner, false = draw
  const[winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    //Revisamos si hay ganador de las combinaciones posibles
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  const checkEndGame = (newBoard) => {
    //Revisamos si el tablero esta lleno
    return newBoard.every((square) => square !== null);
  }

  const updateBoard = (index) => {
    //no actualizamos si ya contiene algo o existe un ganador
    if (board[index] || winner) return;
    //Actualizamos el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //guardar aquí partida
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', JSON.stringify(newTurn));
    //Revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //Empate
    }
  }
  return (
    <main className="board">

      <h1>Tic Tac Toe</h1>
    <button onClick={resetGame}>Reset del Juego</button>
      {/* Juego */}
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index} 
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          }) 
        }
      </section>

      {/* Turno */}
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
  
      {/* Ganador */}
      {
        winner !== null && (
          <section className="winner">
            <div className='text'>
              <h2>
                {winner === false ? 'Empate' : 'Ganó'}
              </h2>
              
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

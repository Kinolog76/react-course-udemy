function GameOver({ winner, onResetGame }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} won</p>}
      {!winner && <p>It`s a draw</p>}
      <p>
        <button onClick={onResetGame}>Restart</button>
      </p>
    </div>
  );
}

export default GameOver;

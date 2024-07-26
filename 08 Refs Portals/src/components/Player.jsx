import { useState, useRef } from "react";

export default function Player() {
  let playerName = useRef();
  const [userName, setUserName] = useState(null);

  function handleClick() {
    setUserName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {userName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

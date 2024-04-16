import Button from "../../components/button.js";
import { useNavigate } from "react-router-dom";


function GameSelection() {
  const navigate = useNavigate();

  function handleGameClick(game) {
    navigate(`/${game}`);
  }

  return (
    <section className="game-selection-container">
      <article className="game-selection-container__game-wrapper">
        <h3 className="game-selection-container__game-wrapper__title">Wordscramble</h3>
       <Button value={"Play"} onClick={() => handleGameClick('word-scramble')} />
      </article>
    </section>
  );
}

export default GameSelection;

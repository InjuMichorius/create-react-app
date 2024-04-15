import Button from "../../components/button.js";

function GameSelection() {
  return (
    <section className="game-selection-container">
      <article className="game-selection-container__game-wrapper">
        <h3 className="game-selection-container__game-wrapper__title">Wordscramble</h3>
       <Button value={"Play"} />
      </article>
    </section>
  );
}

export default GameSelection;

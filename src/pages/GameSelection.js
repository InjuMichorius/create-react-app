import Button from "../atoms/Button";
import AvatarPreview from "../molecules/AvatarPreview";
import { useNavigate } from "react-router-dom";


function GameSelection() {
  const navigate = useNavigate();

  function handleGameClick(game) {
    navigate(`/${game}`);
  }

  return (
    <section className="game-selection-container">
      <h2 className="game-selection-container__title">Online players (4)</h2>
      <div className="game-selection-container__online-players">
          <AvatarPreview imageId={1} points={"400"} username={"Inju"} size={"medium"} />
          <AvatarPreview imageId={2} points={"200"} username={"Danny"} size={"medium"} />
          <AvatarPreview imageId={3} points={"100"} username={"Paul"} size={"medium"} />
          <AvatarPreview imageId={2} points={"0"} username={"Bart"} size={"medium"} />
      </div>
      <h2 className="game-selection-container__title">Game selection</h2>
      <article className="game-selection-container__game-wrapper">
        <h3 className="game-selection-container__game-wrapper__title">Wordscramble</h3>
       <Button value={"Play"} onClick={() => handleGameClick('word-scramble')} />
      </article>
    </section>
  );
}

export default GameSelection;

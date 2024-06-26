function WordScramble() {
    return (
      <section className="word-scramble-container">
        <section className="scoreboard">
          <h2 id="room-name">ROOMNAME</h2>
          <ul id="users"></ul>
        </section>
        <section className="top">
          <ul className="word-container" id="word-container">
            <li className="loading-letter">l</li>
            <li className="loading-letter">o</li>
            <li className="loading-letter">a</li>
            <li className="loading-letter">d</li>
            <li className="loading-letter">i</li>
            <li className="loading-letter">n</li>
            <li className="loading-letter">g</li>
          </ul>
          <b className="js-countdown-timer hint">Unscramble words as fast as you can.</b>
        </section>
        <section>
          <span className="loading">Berichten aan het inladen...</span>
          <span className="empty">Er zijn nog geen berichten hier, typ iets om te kijken of er iemand reageert.</span>
          <span className="offline">Er gaat iets mis met de verbinding, we proberen de connectie te herstellen...</span>
          <ul id="chat-box"></ul>
          <form>
            <input type="text" autoComplete="off" placeholder="Guess" id="word-scramble-guess-input" />
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></button>
          </form>
        </section>
      </section>
    );
  }
  
  export default WordScramble;
  
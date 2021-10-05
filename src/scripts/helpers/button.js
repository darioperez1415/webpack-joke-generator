const jokeButtons = () => {
  document.querySelector('#button-container').innerHTML = `
    <button type="button" id="getJoke-btn" class="btn btn-primary">Get a JoKE</button>
    <button type="button" id="getPunchline-btn" class="btn btn-secondary">Get a Punchline</button>
    <button type="button" id="getANewLine-btn" class="btn btn-success"> Get a new Joke</button>
    `;
};

export default jokeButtons;

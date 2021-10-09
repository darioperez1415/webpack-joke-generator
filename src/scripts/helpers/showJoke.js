const showJoke = (jokeObj) => {
  document.querySelector('#joke-container').innerHTML = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Get a Joke</h5>
        <p class="card-text">${jokeObj.setup}</p>
        <a href="#" class="btn btn-primary" id="showPunchline">GET PUNCHLINE</a>
      </div>
    </div>
  `;
};

export default showJoke;

const punchline = (jokeObj) => {
  document.querySelector('#joke-container').innerHTML = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Get a Joke</h5>
        <p class="card-text">${jokeObj.setup}</p>
        <hr>
        <p class="card-text">${jokeObj.punchline}</p>
        <a href="#" class="btn btn-primary" id="getJokeBtn">GET A NEW JOKE</a>
      </div>
    </div>
  `;
};

export default punchline;

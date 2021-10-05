const showJoke = (obj = {}) => {
  console.warn(obj);
  document.querySelector('#joke-container').innerHTML = `
  <h4>${obj.setup ? obj.setup : ''}</h4>
  `;
  document.querySelector('#button-container').innerHTML = `
    <button type="submit" id="joke-btn" class="btn btn-primary">Get a Joke</button>
    `;
};

export default showJoke;

import showJoke from './helpers/showJoke';
import getJoke from './helpers/jokeData';
import punchline from './helpers/punchline';

let joke = {};

const domEvents = () => {
  document.querySelector('#joke-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR GETTING A JOKE
    if (e.target.id.includes('getJokeBtn')) {
      getJoke().then((obj) => {
        joke = {
          setup: obj.setup,
          punchline: obj.delivery
        };

        showJoke(joke);
      });
    }

    // CLICK EVENT FOR GETTING A PUNCHLINE
    if (e.target.id.includes('showPunchline')) {
      punchline(joke);
    }
  });
};

export default domEvents;

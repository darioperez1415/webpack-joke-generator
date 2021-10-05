// import jokeButtons from './helpers/button';
import getJoke from './helpers/jokeData';
import showJoke from './helpers/button';

const buttonEvents = () => {
  document.querySelector('#button-container').addEventListener('click', (e) => {
    // Testing Click

    if (e.target.id.includes('joke-btn')) {
      getJoke().then(showJoke);
    }
  });
};

export default buttonEvents;

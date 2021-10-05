// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import jokeButtons from './helpers/button';
import domBuilder from './helpers/domBuilder';
// import jokeData from './helpers/jokeData';

const init = () => {
  domBuilder();
  jokeButtons();
  console.warn('Joke-generator');
  // jokeData().then(console.warn);
};

init();

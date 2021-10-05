// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import buttonEvents from './buttonEvents';
import domBuilder from './helpers/domBuilder';
import getAJoke from './helpers/getAJoke';

const init = () => {
  domBuilder();
  getAJoke();
  buttonEvents();
};

init();

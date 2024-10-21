import './start.css';

import createMainPage from '../main/main';

import getData from '../../services/get-words';

export default function createStart() {
  const startPage = document.createElement('div');
  startPage.className = 'start';
  const puzzle = document.createElement('h1');
  puzzle.className = 'puzzle';
  puzzle.textContent = 'ENGLISH PUZZLE';
  const description = document.createElement('p');
  description.className = 'description';
  description.innerHTML = 'Click on the words, collect phrases. <br> Enjoy and improve your English together';
  const greeting = document.createElement('p');
  greeting.className = 'greeting';
  const startButton = document.createElement('button');
  startButton.className = 'start-button';
  startButton.textContent = 'Start';
  const logout = document.createElement('button');
  logout.className = 'logout';
  startPage.appendChild(logout);
  document.body.appendChild(startPage);
  startPage.appendChild(puzzle);
  startPage.appendChild(greeting);
  startPage.appendChild(description);
  startPage.appendChild(startButton);
  startButton.addEventListener('click', () => {
    startPage.style.display = 'none';
    createMainPage();
    getData();
  });
}
createStart();

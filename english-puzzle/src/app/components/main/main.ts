import './main.css';

import createHint from './hint';

import createResult from './result';

export default function createMainPage() {
  const mainPage = document.createElement('div');
  mainPage.className = 'game-container';
  const buttonContainer = document.createElement('div');
  const nameGame = document.createElement('h1');
  nameGame.className = 'name-game';
  nameGame.innerHTML = 'Сlick on the words and collect sentences:';
  const wordContainer = document.createElement('div');
  wordContainer.className = 'word-container';
  const continueButton = document.createElement('button');
  continueButton.className = 'continue-button';
  continueButton.textContent = 'Check';
  continueButton.disabled = true;
  document.body.appendChild(mainPage);
  mainPage.appendChild(buttonContainer);
  mainPage.appendChild(nameGame);
  createHint(buttonContainer);
  createResult();
  mainPage.appendChild(wordContainer);
  mainPage.appendChild(continueButton);
}

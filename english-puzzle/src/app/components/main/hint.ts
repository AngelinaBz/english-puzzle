import './hint.css';

export default function createHint(buttonContainer: HTMLElement) {
  const mainPage = document.querySelector('.game-container') as HTMLElement;
  const translationContainer = document.createElement('div');
  const translationHint = document.createElement('p');
  translationHint.className = 'translation';
  mainPage.appendChild(translationContainer);
  translationContainer.appendChild(translationHint);
  translationContainer.className = 'translation-container';
  const translationButton = document.createElement('div');
  translationButton.className = 'translation-button';
  buttonContainer.appendChild(translationButton);
  translationButton.addEventListener('click', () => {
    translationHint.classList.toggle('invisible');
    translationButton.classList.toggle('nohint');
  });
}

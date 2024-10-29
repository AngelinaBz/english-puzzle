import activateContinue from './check-words';

import moveWords from './move-words';

import setupWords from './words-settings';

export default function addWordToContainers(
  word: string,
  textWord: string[],
  result: HTMLElement,
  textExampleTranslate: string,
) {
  const wordDiv = document.createElement('div') as HTMLElement;
  const textDiv = document.createElement('div') as HTMLElement;
  const convexityDiv = document.createElement('div') as HTMLElement;
  const wordContainer = document.querySelector('.word-container') as HTMLElement;
  const continueButton = document.querySelector('.continue-button') as HTMLButtonElement;
  const translationHint = document.querySelector('.translation') as HTMLElement;
  textDiv.innerText = word;
  translationHint.innerText = textExampleTranslate;
  textDiv.classList.add('word');
  convexityDiv.classList.add('convexity');
  wordDiv.classList.add('puzzle-piece');
  wordDiv.appendChild(textDiv);
  wordDiv.appendChild(convexityDiv);
  wordContainer.appendChild(wordDiv);
  const moveWordsHandler = moveWords(result);
  continueButton.disabled = true;
  wordDiv.addEventListener('click', () => {
    moveWordsHandler(word, wordDiv);
    activateContinue(textWord, result);
    if (wordContainer.children.length === 0) {
      continueButton.disabled = false;
    } else {
      continueButton.disabled = true;
    }
  });
  setupWords(word, textWord, result, convexityDiv, textDiv);
}

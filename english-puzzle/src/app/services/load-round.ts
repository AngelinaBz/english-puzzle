import { Data } from '../interface';

import displayAll from './display';

import checkOrder from '../controllers/main.controllers/check-button';

import moveNextSentence from '../controllers/main.controllers/afte-continue';

import updateCounters from '../controllers/main.controllers/update-counters';

export default function loadNextRound(data: Data, currentRound: number, currentPhrase: number) {
  const { words } = data.rounds[currentRound];
  const { textExample } = words[currentPhrase];
  const { textExampleTranslate } = words[currentPhrase];
  const textWord: string[] = textExample.split(' ');
  let usedWords: string[] = [];
  const resultContainer = document.querySelector('.result-container') as HTMLElement;
  const result = resultContainer.querySelector(`.result:nth-child(${currentPhrase + 1})`) as HTMLElement;
  const continueButton = document.querySelector('.continue-button') as HTMLButtonElement;
  let continueButtonClickHandler: () => void;
  function nextStep() {
    continueButton.removeEventListener('click', continueButtonClickHandler);
    const [count, countRound] = updateCounters(currentPhrase, currentRound, resultContainer);
    if (countRound < data.rounds.length) {
      loadNextRound(data, countRound, count);
    }
  }
  usedWords = [];
  continueButtonClickHandler = function check() {
    if (continueButton.textContent === 'Continue') {
      nextStep();
      moveNextSentence();
    } else {
      checkOrder(textWord, result);
    }
  };
  continueButton.addEventListener('click', continueButtonClickHandler);
  displayAll(textWord, result, usedWords, textExampleTranslate);
}

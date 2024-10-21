import addWordToContainers from '../controllers/main.controllers/add-words';

import shuffleArray from '../controllers/main.controllers/random';

export default function displayAll(
  textWord: string[],
  result: HTMLElement,
  usedWords: string[],
  textExampleTranslate: string,
) {
  let remainingWords = shuffleArray(textWord).slice();
  remainingWords = remainingWords.filter((word) => !usedWords.includes(word));
  remainingWords.forEach((word) => {
    addWordToContainers(word, textWord, result, textExampleTranslate);
    usedWords.push(word);
  });
}

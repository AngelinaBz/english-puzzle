export default function moveNextSentence() {
  const continueButton = document.querySelector('.continue-button') as HTMLButtonElement;
  const translationButton = document.querySelector('.translation-button') as HTMLButtonElement;
  const translationHint = document.querySelector('.translation') as HTMLButtonElement;
  continueButton.textContent = 'Check';
  const wordsDiv = document.querySelectorAll('.word');
  wordsDiv.forEach((wordElem) => {
    wordElem.classList.remove('border-bottom_incorrect');
    wordElem.classList.remove('border-bottom_correct');
  });
  if (translationButton.classList.contains('nohint')) {
    translationHint.classList.add('invisible');
  }
}

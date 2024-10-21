export default function moveWords(result: HTMLElement) {
  return function app(word: string, wordDiv: HTMLElement) {
    const wordContainer = document.querySelector('.word-container') as HTMLElement;
    if (!result) {
      console.error('Error');
      return;
    }
    if (result.contains(wordDiv)) {
      result.removeChild(wordDiv);
      wordContainer.appendChild(wordDiv);
      wordDiv.classList.remove('margin');
    } else {
      result.appendChild(wordDiv);
      wordDiv.classList.add('margin');
    }
  };
}

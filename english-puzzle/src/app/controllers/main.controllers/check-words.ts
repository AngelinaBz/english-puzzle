export default function activateContinue(textWord: string[], result: HTMLElement): void {
  const continueButton = document.querySelector('.continue-button') as HTMLButtonElement;
  const translationHint = document.querySelector('.translation') as HTMLButtonElement;
  const originalOrder = textWord.join(' ');
  if (result) {
    let currentOrder = '';
    const resultWords = Array.from(result.children) as HTMLElement[];
    resultWords.forEach((element: HTMLElement) => {
      const child = Array.from(element.children) as HTMLElement[];
      const wordsText = child.map((childElement: HTMLElement) => childElement.innerText).join(' ');
      currentOrder += `${wordsText}`;
    });
    currentOrder = currentOrder.trim();
    if (currentOrder === originalOrder) {
      continueButton.disabled = false;
      continueButton.textContent = 'Continue';
      translationHint.classList.remove('invisible');
    } else {
      continueButton.disabled = true;
      continueButton.textContent = 'Check';
    }
  }
}

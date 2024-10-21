export default function checkOrder(textWord: string[], result: HTMLElement) {
  const puzzlePieces = Array.from(result.querySelectorAll('.puzzle-piece'));
  puzzlePieces.forEach((puzzlePiece, index) => {
    const wordElement = puzzlePiece.querySelector('.word');
    const convexityElement = puzzlePiece.querySelector('.convexity');
    if (wordElement instanceof HTMLElement && convexityElement instanceof HTMLElement) {
      const word = textWord[index];
      if (wordElement.innerText.trim() === word.trim()) {
        wordElement.classList.remove('border-bottom_incorrect');
        wordElement.classList.add('border-bottom_correct');
      } else {
        wordElement.classList.add('border-bottom_incorrect');
        wordElement.classList.remove('border-bottom_correct');
      }
    }
  });
}

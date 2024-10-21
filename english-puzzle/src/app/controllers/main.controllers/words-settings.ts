export default function setupWords(
  word: string,
  textWord: string[],
  result: HTMLElement,
  convexityDiv: HTMLElement,
  textDiv: HTMLElement,
) {
  const totalLetters = textWord.reduce((acc, curr) => acc + curr.length, 0);
  const totalWidth = 550 - 17 * (textWord.length - 1);
  const wordWidth = (totalWidth / totalLetters) * word.length;
  const textStyle = textDiv;
  textStyle.style.width = `${wordWidth}px`;
  if (textWord.indexOf(word) === 0) {
    textStyle.style.maskImage = 'none';
  }
  if (textWord.indexOf(word) === textWord.length - 1) {
    const convexityStyle = convexityDiv;
    convexityStyle.style.display = 'none';
  }
  const resultContainer = document.querySelector('.result-container') as HTMLElement;
  const results = resultContainer.querySelectorAll('.result');
  results.forEach((elem) => {
    elem.classList.remove('active');
  });
  result.classList.add('active');
}

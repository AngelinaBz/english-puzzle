import './result.css';

export default function createResult() {
  const mainPage = document.querySelector('.game-container') as HTMLElement;
  const resultContainer = document.createElement('div');
  resultContainer.className = 'result-container';
  for (let i = 0; i < 10; i += 1) {
    const result = document.createElement('div');
    result.className = 'result';
    resultContainer.appendChild(result);
    if (i === 0) {
      result.classList.add('active');
    }
  }
  mainPage.appendChild(resultContainer);
}

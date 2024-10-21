export default function clearResult(resultContainer: HTMLElement) {
  const results = resultContainer.querySelectorAll('.result');
  results.forEach((elem) => {
    const newElem = elem;
    newElem.innerHTML = '';
  });
}

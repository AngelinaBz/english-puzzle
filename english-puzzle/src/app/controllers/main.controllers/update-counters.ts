import clearResult from './clear-result';

export default function updateCounters(
  currentPhrase: number,
  currentRound: number,
  resultContainer: HTMLElement,
): [number, number] {
  let count = currentPhrase;
  let countRound = currentRound;
  if (count < 9) {
    count += 1;
  } else {
    clearResult(resultContainer);
    countRound += 1;
    count = 0;
  }
  return [count, countRound];
}

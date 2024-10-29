import loadNextRound from './load-round';

import { Data } from '../interface';

export default function getData() {
  fetch('https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel1.json')
    .then((response) => response.json())
    .then((data: Data) => {
      loadNextRound(data, 0, 0);
    });
}

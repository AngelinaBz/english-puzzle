import LocalStorageManager from './services/localstorage';

import changePage from './controllers/change-page';

import logOutSystem from './controllers/logout';

const startPage = document.querySelector('.start') as HTMLElement;
const form = document.querySelector('form') as HTMLElement;

const localStorageManager = new LocalStorageManager();
const userData = localStorageManager.getUserData();

if (userData) {
  startPage.style.display = 'flex';
  form.style.display = 'none';
  const userDataStore = localStorageManager.getUserData();
  const greeting = document.querySelector('.greeting') as HTMLParagraphElement;
  if (userDataStore) {
    greeting.textContent = `Welcome, ${userDataStore.firstName} ${userDataStore.lastName}`;
  }
  changePage();
  logOutSystem();
} else {
  form.style.display = 'flex';
  startPage.style.display = 'none';
}

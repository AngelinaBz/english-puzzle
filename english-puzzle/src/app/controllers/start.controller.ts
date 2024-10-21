import '../components/start/start';

import LocalStorageManager from '../services/localstorage';

import changePage from './change-page';

import logOutSystem from './logout';

const localStorageManager = new LocalStorageManager();
const submitButton = document.querySelector('.submit') as HTMLButtonElement;
const firstNameInput = document.querySelector('.firstname') as HTMLInputElement;
const surnameInput = document.querySelector('.surname') as HTMLInputElement;
const startPage = document.querySelector('.start') as HTMLElement;
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const form = document.querySelector('form') as HTMLElement;
  form.style.display = 'none';
  const firstName = firstNameInput.value;
  const surname = surnameInput.value;
  localStorageManager.saveUserData(firstName, surname);
  startPage.style.display = 'flex';
  const userData = localStorageManager.getUserData();
  const greeting = document.querySelector('.greeting') as HTMLParagraphElement;
  if (userData) {
    greeting.textContent = `Welcome, ${userData.firstName} ${userData.lastName}`;
  }
  firstNameInput.value = '';
  surnameInput.value = '';
  submitButton.disabled = true;
  changePage();
  logOutSystem();
});

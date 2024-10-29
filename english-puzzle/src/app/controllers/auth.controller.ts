import '../components/auth/auth';

const firstNameInput = document.querySelector('.firstname') as HTMLInputElement;
const surnameInput = document.querySelector('.surname') as HTMLInputElement;
const submitButton = document.querySelector('.submit') as HTMLButtonElement;
const errorName = document.querySelector('.errorName') as HTMLParagraphElement;
const errorSurname = document.querySelector('.errorSurname') as HTMLParagraphElement;
function checkNameValidity(inputField: HTMLInputElement, errorField: HTMLParagraphElement) {
  const value = inputField.value.trim();
  const newerrorField = errorField;
  let errorMessage: string[] = [];
  const count = inputField === firstNameInput ? 3 : 4;
  if (!/^[a-zA-Z\\-]+$/.test(value)) {
    errorMessage.push('Invalid characters');
  }
  if (!/^[A-Z]/.test(value)) {
    errorMessage.push('First letter should be uppercase');
  }
  if (value.length < count) {
    errorMessage.push(`Must be at least ${count} characters`);
  }
  if (value === '') {
    errorMessage = [];
  }
  newerrorField.textContent = errorMessage.join('. ');
  return errorMessage.length === 0;
}
function checkFormValidity() {
  if (document.activeElement === firstNameInput) {
    checkNameValidity(firstNameInput, errorName);
  } else if (document.activeElement === surnameInput) {
    checkNameValidity(surnameInput, errorSurname);
  }
  const isValidName = errorName.textContent === '' && errorSurname.textContent === '';
  const isEmptyInput = firstNameInput.value.trim() !== '' && surnameInput.value.trim() !== '';
  submitButton.disabled = !(isValidName && isEmptyInput);
}
firstNameInput.addEventListener('input', checkFormValidity);
surnameInput.addEventListener('input', checkFormValidity);

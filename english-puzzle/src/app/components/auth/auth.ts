import './auth.css';

export default function createForm() {
  const form = document.createElement('form');
  const login = document.createElement('h1');
  const nameContainer = document.createElement('div');
  const surnameContainer = document.createElement('div');
  const firstName = document.createElement('label');
  const surnameName = document.createElement('label');
  const firstNameInput = document.createElement('input');
  const surnameInput = document.createElement('input');
  const submitButton = document.createElement('button');
  const errorName = document.createElement('p');
  const errorSurname = document.createElement('p');

  firstNameInput.className = 'firstname';
  surnameInput.className = 'surname';
  submitButton.className = 'submit';
  login.textContent = 'Login';
  firstName.textContent = 'First Name';
  surnameName.textContent = 'Surname';
  submitButton.textContent = 'Login';
  submitButton.disabled = true;
  errorName.className = 'errorName';
  errorSurname.className = 'errorSurname';

  form.appendChild(login);
  form.appendChild(nameContainer);
  form.appendChild(surnameContainer);
  nameContainer.appendChild(firstName);
  surnameContainer.appendChild(surnameName);
  nameContainer.appendChild(firstNameInput);
  surnameContainer.appendChild(surnameInput);
  nameContainer.appendChild(errorName);
  surnameContainer.appendChild(errorSurname);
  form.appendChild(submitButton);
  document.body.appendChild(form);
}
createForm();

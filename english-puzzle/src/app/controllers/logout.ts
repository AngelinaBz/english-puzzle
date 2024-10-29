export default function logOutSystem() {
  const logout = document.querySelector('.logout') as HTMLElement;
  const startPage = document.querySelector('.start') as HTMLElement;
  const form = document.querySelector('form') as HTMLElement;
  logout.addEventListener('click', () => {
    localStorage.removeItem('userData');
    form.style.display = 'flex';
    startPage.style.display = 'none';
  });
}

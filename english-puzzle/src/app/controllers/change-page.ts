export default function changePage() {
  const body = document.querySelector('body') as HTMLElement;
  const startButton = document.querySelector('.start-button') as HTMLElement;
  const logout = document.querySelector('.logout') as HTMLElement;
  startButton.addEventListener('mouseover', () => {
    body.classList.add('dark');
  });
  startButton.addEventListener('mouseout', () => {
    body.classList.remove('dark');
  });
  logout.addEventListener('mouseover', () => {
    body.classList.add('dark');
  });
  logout.addEventListener('mouseout', () => {
    body.classList.remove('dark');
  });
}

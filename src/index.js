import './style.css';

const component = () => {
  const element = document.querySelector('.test');
  element.innerHTML = 'Welcome';
};

window.onload = component();
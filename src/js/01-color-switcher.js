const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startClick = () => {
  startBtnRef.setAttribute('disabled', true);
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stopClick = () => {
  startBtnRef.removeAttribute('disabled');
  clearInterval(timerId);
};

startBtnRef.addEventListener('click', startClick);
stopBtnRef.addEventListener('click', stopClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  let intervalId = null;
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  
  startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  });
  stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
  });

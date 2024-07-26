function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';

  let boxesHTML = '';

  for (let i = 0; i < amount; i++) {
    const size = 30 + 10 * i;
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
  }

  boxesContainer.insertAdjacentHTML('beforeend', boxesHTML);
}

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);

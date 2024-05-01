function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  destroyBoxes();

  const fragment = document.createDocumentFragment(); // Створюємо фрагмент

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    fragment.appendChild(box); // Додаємо елемент до фрагмента замість додавання безпосередньо до DOM
  }

  boxesContainer.appendChild(fragment); // Додаємо фрагмент до DOM
  input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

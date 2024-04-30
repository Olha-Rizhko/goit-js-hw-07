const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {};
  const formInputs = event.target.elements;

  for (let input of formInputs) {
    if (input.tagName === 'INPUT') {
      const trimmedValue = input.value.trim();
      formData[input.name] = trimmedValue;
      if (!trimmedValue) {
        alert('All form fields must be filled in');
        return;
      }
    }
  }

  console.log(formData);
  loginForm.reset();
});


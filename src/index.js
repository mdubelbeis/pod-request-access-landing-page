const error = document.querySelector('#error');
const form = document.querySelector('#form');

// email.addEventListener('keyup', (e) => {
//   console.log(e.target.value);
// });

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.email.addEventListener('click', () => {
    error.classList.add('hidden');
  });

  if (!form.email.value) {
    error.classList.remove('hidden');
  }

  if (!form.email.value.includes('@')) {
    error.classList.remove('hidden');
  }
});

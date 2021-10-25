const URL = 'http://localhost:3000';
const formEL = document.querySelector('.register-form');
const error = document.querySelector('.error-field');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');
const loginBtn = document.querySelector('.login-btn-simple');

formEL.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('sending');
  const formData = new FormData(formEL);
  console.log('formData', Object.fromEntries(formData));
  // send fetch
  const resp = await fetch(`${URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const dataBack = await resp.json();
  console.log('dataBack', dataBack);
  if (password1 != password2) {
    error.innerHTML = `<h2>Passwords do not match.</h2>`;
  }
  // if (dataBack.error) {
  //   console.log(dataBack.error);
  //   error.innerHTML = `<h2>Email already exists</h2>`;
  // }
  if (dataBack.msg === 'register success') {
    error.innerHTML = `<h2>Successfully Registered. Please wait till we get you to login page.</h2>`;
    window.setTimeout(function () {
      window.location.href = 'index.html';
    }, 3000);
  }
});

loginBtn.onclick = () => {
  window.location.href = 'index.html';
};

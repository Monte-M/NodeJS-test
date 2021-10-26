const URL = 'http://localhost:3000';
const formEL = document.querySelector('.register-form');
const error = document.querySelector('.error-field');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');
const loginBtn = document.querySelector('.login-btn-simple');

formEL.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(formEL);
  const resp = await fetch(`${URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const dataBack = await resp.json();
  if (password1.value != password2.value) {
    error.innerHTML = `<h2>Passwords do not match.</h2>`;
  }
  if (password1.value.length < 6) {
    error.innerHTML = `<h2>Password must be atleast 6 characters long</h2>`;
  }
  if (Array.isArray(dataBack.error) && dataBack.error[0].field == 'email') {
    error.innerHTML += `<h2>Email is not valid</h2>`;
  }
  if (dataBack.error == 'something went wrong') {
    error.innerHTML = `<h2>Such email already exists</h2>`;
  }
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

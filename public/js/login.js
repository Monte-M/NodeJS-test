const URL = 'http://localhost:3000';
const formEL = document.querySelector('.login-form');
const registerBtn = document.querySelector('.register-btn-simple');
const password1 = document.getElementById('password');
const error = document.querySelector('.error-field');

formEL.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(formEL);
  const resp = await fetch(`${URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const dataBack = await resp.json();
  if (dataBack.error === 'passwords not match') {
    error.innerHTML = `<h2>Email or password is incorrect.</h2>`;
  }
  if (password1.value.length < 6) {
    error.innerHTML = `<h2>Password must be atleast 6 characters long</h2>`;
  }
  if (Array.isArray(dataBack.error) && dataBack.error[0].field == 'email') {
    error.innerHTML += `<h2>Email is not valid</h2>`;
  }
  if (dataBack.error === 'email does not exsits') {
    error.innerHTML = `<h2>No such user</h2>`;
  }
  if (dataBack.msg === 'success') {
    const { email, token } = dataBack.loggedInUser;
    const { id } = dataBack.dbResult[0];
    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
    localStorage.setItem('user_id', id);
    window.location = 'groups.html';
  }
});

registerBtn.onclick = () => {
  window.location.href = 'register.html';
};

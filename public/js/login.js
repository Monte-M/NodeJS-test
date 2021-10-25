const URL = 'http://localhost:3000';
const formEL = document.querySelector('.login-form');
const registerBtn = document.querySelector('.register-btn-simple');

formEL.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('sending');
  const formData = new FormData(formEL);
  console.log('formData', Object.fromEntries(formData));
  // send fetch
  const resp = await fetch(`${URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const dataBack = await resp.json();
  console.log('dataBack login', dataBack);
  if (dataBack.msg === 'success') {
    const { email, token } = dataBack.data;
    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
    // redirect to groups page
    // window.location = 'index.html';
  }
});

registerBtn.onclick = () => {
  window.location.href = 'register.html';
};

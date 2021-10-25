const URL = 'http://localhost:3000';
const id = localStorage.getItem('user_id');
const containerEl = document.querySelector('.group-container');
const selectEl = document.getElementById('groups');
const addBtn = document.querySelector('.addGroup-btn');

async function getGroupsAndDisplay(reqMethod = 'GET') {
  const token = localStorage.getItem('token');
  const resp = await fetch(`${URL}/accounts/${id}`, {
    method: reqMethod,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await resp.json();
  //   console.log('data', data.data);
  const item = data.data
    .map(
      (el) =>
        `<div class="single-group">
            <h2>ID: ${el.group_id}</h2>
            <h5>${el.name}</h5>
        </div>`,
    )
    .join('');
  containerEl.innerHTML = item;
}

getGroupsAndDisplay();

async function getPossibleGroups() {
  const resp = await fetch(`${URL}/groups`);
  const data = await resp.json();
  console.log(data.data);
  const item = data.data
    .map((el) => `<option value="${el.id}">${el.name}</option>`)
    .join('');
  selectEl.innerHTML = item;
}

getPossibleGroups();

addBtn.onclick = async (reqMethod = 'POST') => {
  const token = localStorage.getItem('token');
  const userChoice = {
    user_id: id,
    group_id: selectEl.value,
  };
  console.log(userChoice);
  const resp = await fetch(`${URL}/accounts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userChoice),
  });
  const dataBack = await resp.json();
  console.log(dataBack);
};

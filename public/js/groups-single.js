const URL = 'http://localhost:3000';
const groupId = localStorage.getItem('group_id');

const tbodyEl = document.querySelector('tbody');
const addBtn = document.querySelector('.addBill-btn');
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const back = document.querySelector('.back-btn');

async function getBillsAndDisplay(reqMethod = 'GET') {
  const token = localStorage.getItem('token');
  const resp = await fetch(`${URL}/bills/${groupId}`, {
    method: reqMethod,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await resp.json();

  console.log('data', data.data);
  const item = data.data
    .map(
      (el) =>
        `<tr>
        <td>${el.id}</td>
        <td>${el.description}</td>
        <td>$${el.amount}</td>
      </tr>`,
    )
    .join('');
  tbodyEl.innerHTML = item;
}
getBillsAndDisplay();

addBtn.onclick = async (reqMethod = 'POST') => {
  const token = localStorage.getItem('token');
  const newBill = {
    group_id: groupId,
    description: description.value,
    amount: amount.value,
  };

  const resp = await fetch(`${URL}/bills`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newBill),
  });
  const dataBack = await resp.json();
  console.log(dataBack);
  if (dataBack.msg === 'bill added') {
    window.location.reload();
  }
};

back.onclick = () => {
  window.location.href = 'groups.html';
};

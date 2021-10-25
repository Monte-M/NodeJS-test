const URL = 'http://localhost:3000';

async function getGroupsAndDisplay(reqMethod = 'GET') {
  const token = localStorage.getItem('token');
  const resp = await fetch(`${URL}/accounts`, {
    method: reqMethod,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await resp.json();
  console.log(data);
  return data;
}

getGroupsAndDisplay();

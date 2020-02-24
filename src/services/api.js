const apiURL = 'http://34.89.93.186:8080/apiv1';

export const apiRegister = async (username, password) => {
  const registerEndPoint = `${apiURL}/register`;

  const response = await fetch(registerEndPoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
    credentials: 'include',
  });
  const json = await response.json();
  return json;
};

export const apiLogin = async (username, password) => {
  const loginEndPoint = `${apiURL}/login`;

  const response = await fetch(loginEndPoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
    credentials: 'include',
  });
  const json = await response.json();
  return json;
};

export const getAdset = async () => {
  const adsetEndPoint = `${apiURL}/anuncios`;

  const response = await fetch(adsetEndPoint, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });
  const json = await response.json();
  return json;
};

export const tagsAvailable = async () => {
  const tagsEndPoint = `${apiURL}/tags`;

  const response = await fetch(tagsEndPoint);
  const json = await response.json();
  return json.results;
};

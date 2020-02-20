const apiURL = 'http://34.89.93.186:8080/apiv1';

export const apiRegister = async (username, password) => {
  const registerEndPoint = `http://34.89.93.186:8080/apiv1/register`;

  const response = await fetch('http://34.89.93.186:8080/apiv1/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
    credentials: 'include',
  });
  const json = await response.json();
  console.log(json);
  return json;
};

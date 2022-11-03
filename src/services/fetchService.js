export const getAllUsers = async () => {
  const res = await fetch("https://reqres.in/api/users/");
  console.log('Response:', res)
  console.log('Status:', res.status)
  console.log('OK?', res.ok)
    // We return the json
  return res.json()
}

export const getAllPageUsers = async (page) => {
  const res = await fetch(`https://reqres.in/api/users?page=${page}`);
  console.log('Response:', res)
  console.log('Status:', res.status)
  console.log('OK?', res.ok)
    // We return the json
  return res.json()
}

export const getUserDetail = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  console.log('Response:', res)
  console.log('Status:', res.status)
  console.log('OK?', res.ok)
    // We return the json
  return res.json()
}

export const login = async (email, password) => {
  let body = {
    email: email,
    password: password,
  }

  let res = await fetch("https://reqres.in/api/login", {
    method: 'POST',
    mode: 'no-cors',
    credentials: 'omit',
    cache: 'no-cache',
    headers: {
      'Content-type': 'application/json'
    }
  })
  console.log('Response:', res)
  console.log('Status:', res.status)
  console.log('OK?', res.ok)
  return res.json()
}
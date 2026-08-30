'use strict'
async function createUser() {
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Cat',
      job: 'Teacher'
    })
  });
  
  const data = await response.json();
  console.log(data);
}

createUser();
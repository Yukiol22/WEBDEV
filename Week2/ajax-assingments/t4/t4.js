'use strict'

async function fetchData(url, option) {
    const req = await fetch(url, option);

    if (!req.ok) {
      throw new Error(`HTTP error! Status: ${req.status}`);
    }

    return await req.json();
}


async function runExample() {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer'
    };

    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };

    const userData = await fetchData(url, options);
    console.log('Success:', userData);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

runExample();
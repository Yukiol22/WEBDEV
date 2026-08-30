'use strict';

async function getreq() {
  try {
    const req = await fetch('https://reqres.in/api/unknown/23');
    if (!req.ok) {
      throw new Error(`HTTP error! Status: ${req.status}`);
    }

    const data = await req.json();
    console.log('Success:', data);
  } catch (error) {
    console.log('Caught Error:', error.message);
  }
}

getreq();
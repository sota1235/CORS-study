const apiServer = 'http://localhost:8000';

// Fetch API
const headers = new Headers();

fetch(apiServer, {
  credentials: 'include',
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    // Do nothing
  });

// XHLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', apiServer, true);
xhr.withCredentials = true;
xhr.onload = (res) => { console.log(res); };
xhr.send();

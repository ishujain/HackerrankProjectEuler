document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);


function getText() {
  fetch('getText.txt')
    .then(function (res) {
      console.log(res);
      return res.text();
    })
    .then(function (data) {
      document.querySelector('.output').innerHTML = data;
      // console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}


function getJSON() {
  fetch('posts.json')
    .then(function (res) {
      // console.log(res);
      return res.json();
    })
    .then(function (data) {
      let out = '';
      data.forEach(function (item) {
        out += `<li>${item.title}</li>
        <li>${item.body}</li>
        `
      })
      document.querySelector('.output').innerHTML = out;
    })
    .catch(function (error) {
      console.log(error);
    });
}

//
function getAPI() {
  fetch('https://api.github.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (users) {
      console.log('data :>> ', users);
      let out = '';
      users.forEach(function (user) {
        out += `<li>${user.login} </li>
        `;
        document.querySelector('.output').innerHTML = out;
      });
    })
    .catch(function (err) {
      console.log(err);
    })
}
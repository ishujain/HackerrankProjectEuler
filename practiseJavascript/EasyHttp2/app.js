const http = new EasyHttp;

// // For GET
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User data
const data = {
  title: "New title",
  body: "this is new title for body "
}

// // For POST
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// For PUT
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


//for DELETE
// http.delete('https://jsonplaceholder.typicode.com/users/2')
//   .then(res => console.log('res :>> ', res))
//   .catch(err => console.log('err >> ', err))
// const easyhttp = new EasyHttp;

// // For GET
// easyhttp.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// // For POST
// easyhttp.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// For PUT
// easyhttp.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


//for DELETE
// easyhttp.delete('https://jsonplaceholder.typicode.com/users/2')
//   .then(res => console.log('res :>> ', res))
//   .catch(err => console.log('err >> ', err))



// ===========================================
// FOR AJAX EASY HTTP
// ===========================================


const http = new AjaxEasyHttp();

//for all posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) {
//     console.log('err :>> ', err);
//   } else {
//     console.log('posts :>> ', posts);
//   }
// });


//for single post
http.get('https://jsonplaceholder.typicode.com/posts/2', function (err, post) {
  if (err) {
    console.log('err :>> ', err);
  } else {
    console.log('posts :>> ', post);
  }
});

//create data for POST
const data = {
  title: "this is testing ",
  body: "this is custome body fir post requesre . this is testing "
};

//For POST request

// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//   if (err) {
//     console.log('err :>> ', err);
//   } else {
//     console.log('POST request res :>> ', post);
//   }
// });

//For PUT request
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//   if (err) {
//     console.log('err :>> ', err);
//   } else {
//     console.log('PUT request res:>> ', post);
//   }
// });


// //for DELETE post
// http.delete('https://jsonplaceholder.typicode.com/posts/2', function (err, post) {
//   if (err) {
//     console.log('err :>> ', err);
//   } else {
//     console.log('posts :>> ', post);
//   }
// });
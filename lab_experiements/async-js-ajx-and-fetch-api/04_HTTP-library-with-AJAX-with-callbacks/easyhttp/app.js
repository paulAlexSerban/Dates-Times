const http = new easyHTTP();

// GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// GET Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });





// POST a post

// -> Create the data object
// const postData = {
//   title: "custom post",
//   body: "this is a custom post",
// };

// // -> Create post
// http.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   postData,
//   function (err, posts) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
//   }
// );

// PUT a post

// // -> Create the data object
// const putData = {
//   title: "custom put post",
//   body: "this is a custom put post",
// };

// // -> Create post
// http.put(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   putData,
//   function (err, posts) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
//   }
// );

// DELETE a posts
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });
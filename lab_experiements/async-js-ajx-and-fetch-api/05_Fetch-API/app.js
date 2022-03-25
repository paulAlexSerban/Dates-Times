document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);

// Get local text file data
/**
 * 1. pass in the `fetch()` function whatever it is that we need to get, Eg. text.txt
 * 2. because fetch returns promises, we need to use `.then()` to call an anonymous function to which it passes as parameter the response (`res`)
 * 3. we only need from the function the text which is a Promise so we need to return `res.text()`
 * 4. because `res.text()` is a Promise we need to use `.then()` to call an anonymous function and pass in the value of the returned value as data parameter
 */
function getText() {
  fetch("test.txt") // (1)
    .then(function (res) { // (2)
      return res.text(); // (3)
    })
    .then(function (data) { // (4)
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) { //
      console.log(err);
    });
}

// Get local json data
/**
 * 1. as now we want to get the JSON data from the API we call the `res.json()` Promise
 */
function getJson() {
  fetch("posts.json")
    .then(function (res) {
      return res.json(); // (1)
    })
    .then(function (data) {
      console.log(data);
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get from external API
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

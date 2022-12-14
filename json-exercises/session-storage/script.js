const myForm = document.getElementById("myForm");

window.onload = function () {
  if (sessionStorage["person"] != null) {
    const data = JSON.parse(sessionStorage["person"]);
    const message = "Welcome " + data.first + " " + data.last + " to the site!!!";
    document.getElementById("output").innerHTML = message;
    console.log(data);
  }
};

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = JSON.stringify(formData(myForm));
  if (data) {
    sessionStorage["person"] = data;
  }
  console.log(data);
});

function formData(form) {
  const el = form.querySelectorAll('input[type="text"]');
  const myData = {};
  for (let x = 0; x < el.length; x++) {
    const name = el[x].name;
    const value = el[x].value;
    myData[name] = value;
  }

  return myData;
}

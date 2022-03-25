/**
 * in simple Chrome setup you will get console error : 'access to xmlhttprequest at cors ...'
 * to work in Chrome - install Web Server for Chrome, set it up and use it
 */

document.getElementById('button').addEventListener('click', loadData);

/**
 * 1. Create an XHR Object
 * 2. Open
 * 3. Optional - Used for spinners/loaders - this can be used to show something while the request is getting processed
 * $. recommended in case something goes wrong
 */

function loadData() {
  const xhr = new XMLHttpRequest(); // (1)
  xhr.open('GET', 'data.txt', true); // (2)
  console.log('READY_STATE', xhr.readyState);

  xhr.onprogress = function() { // (3)
    console.log('READY_STATE', xhr.readyState);
  }

  xhr.onload = function(){
    console.log('READY_STATE', xhr.readyState);
    if(this.status === 200) {
      console.log("response Text -- >  ", this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  /**
   * This is the old way that was substituted by onload
   */

  // xhr.onreadystatechange = function() {
  //   console.log('READY_STATE', xhr.readyState);
  //   // check if state is OK and if readyState is in request finished 
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() { // (4)
    console.log('Request error...');
  }

  xhr.send();

  // readyState Values
  // 0: request not initialized 
  // 1: server connection established
  // 2: request received 
  // 3: processing request 
  // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
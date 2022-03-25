function easyHTTP() {
  this.http = new XMLHttpRequest();
}

/**  Make an HTTP GET Request
 * @param {*} url 
 * @param {*} callback
 * 
 * 1. capture the scope of the object and make it usable inside `this.http.onload`
 */
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this; // (1)
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status, null);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-Type', 'application/json'); // we need to set the content type - this is done in the content header

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data)); // `data` si going to be just a regular JavaScript object when we pass in  so it needs to be stringified into a JSON
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-Type', 'application/json'); // we need to set the content type - this is done in the content header

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data)); // `data` si going to be just a regular JavaScript object when we pass in  so it needs to be stringified into a JSON
}

// Make an HTTP DELETE Request

easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this; // (1)
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + self.http.status, null);
    }
  }

  this.http.send();
}
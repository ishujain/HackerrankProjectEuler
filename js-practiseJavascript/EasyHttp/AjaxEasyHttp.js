function AjaxEasyHttp() {
  this.http = new XMLHttpRequest();
}

//make GET request method
AjaxEasyHttp.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('ErrorCode: ' + self.http.status);
    }
  };

  this.http.send();
}

//make post request method
AjaxEasyHttp.prototype.post = function (url, data, callback) {

  this.http.open('POST', url, true);
  this.http.setRequestHeader('content-type', 'application/json');
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

//make GET request method
AjaxEasyHttp.prototype.put = function (url, data, callback) {

  this.http.open('PUT', url, true);
  this.http.setRequestHeader('content-type', 'application/json');
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

//make DELETE request method
AjaxEasyHttp.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post is deleted');
    } else {
      callback('ErrorCode: ' + self.http.status);
    }
  };

  this.http.send();
}
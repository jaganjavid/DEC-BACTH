function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// GET Request
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback(`Error: ${self.http.status}`, null);
        }
    };
    this.http.send();
};

// POST Request
easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');
    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    };
    this.http.send(JSON.stringify(data));
};

// PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');
    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    };
    this.http.send(JSON.stringify(data));
};

// DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, 'Post Deleted');
        } else {
            callback(`Error: ${self.http.status}`, null);
        }
    };
    this.http.send();
};

// Example Usage
const http = new easyHTTP();

// GET Request Example
http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
    if (err) console.log(err);
    else console.log(response);
});

// POST Request Example
http.post('https://jsonplaceholder.typicode.com/posts', { title: 'New Post', body: 'This is a new post' }, function (err, response) {
    if (err) console.log(err);
    else console.log(response);
});

// PUT Request Example
http.put('https://jsonplaceholder.typicode.com/posts/1', { title: 'Updated Post', body: 'This is an updated post' }, function (err, response) {
    if (err) console.log(err);
    else console.log(response);
});

// DELETE Request Example
http.delete('https://jsonplaceholder.typicode.com/posts/2', function (err, response) {
    if (err) console.log(err);
    else console.log(response);
});

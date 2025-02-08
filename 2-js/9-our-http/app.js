

const http = new EasyHTTP();


http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err))


const data = {
    name:"jagan",
    username:"jj123",
    email:"jj@email.com"
}

http.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(err => console.log(err))


http.put("https://jsonplaceholder.typicode.com/users/1", data)
.then(data => console.log(data))
.catch(err => console.log(err))


http.delete("https://jsonplaceholder.typicode.com/users/5")
.then(data => console.log(data))
.catch(err => console.log(err))
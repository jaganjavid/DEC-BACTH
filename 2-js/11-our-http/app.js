
const http = new EasyHTTP();

http.get("https://67ab622b5853dfff53d735eb.mockapi.io/users")
.then(data => console.log(data))
.catch(err => console.log(err));

const data = {
    avatar: "752.jpg",
    name:"Jagan"
}

http.post("https://67ab622b5853dfff53d735eb.mockapi.io/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put("https://67ab622b5853dfff53d735eb.mockapi.io/users/1", data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete("https://67ab622b5853dfff53d735eb.mockapi.io/users/1")
.then(data => console.log(data))
.catch(err => console.log(err));
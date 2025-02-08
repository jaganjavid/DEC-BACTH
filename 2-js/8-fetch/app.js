

document.querySelector("#btn-1").addEventListener("click", getText);

document.querySelector("#btn-2").addEventListener("click", getJson);

document.querySelector("#btn-3").addEventListener("click", getApiData);

function getText(){

    fetch("text.txt")
    .then(res => res.text())
    .then(data =>
        document.querySelector("#output").innerText = data
    )
    .catch(err => console.log(err));

}


function getJson(){

    fetch("posts.json")
    .then(res => res.json())
    .then(data => {

        let output = "";

        data.forEach(post => {
            output += `<li>${post.title}</li>`
        }) 

        document.querySelector("#output").innerHTML = output

    })
    .catch(err => console.log(err));

}

function getApiData(){

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {

        let output = "";

        data.forEach(post => {
            output += `<li>${post.username}</li>`
        }) 

        document.querySelector("#output").innerHTML = output

    })
    .catch(err => console.log(err));

}
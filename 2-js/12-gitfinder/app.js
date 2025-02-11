
const github = new GitHub();

const ui = new UI();


const submitBtn = document.querySelector("#submit-button");

submitBtn.addEventListener("click", (e) => {

    // Get the user input
    let userText = document.querySelector("#searchUser").value;

    if(userText === ""){
        alert("Please fill the fileds")
    }else{
        github.getUser(userText).then(data => ui.showProfile(data))
        .catch(err => console.log(err))
    }

    document.querySelector("#searchUser").value = "";

})

document.querySelector("#searchUser").addEventListener("input", (e) => {
    ui.clearProfile();
})
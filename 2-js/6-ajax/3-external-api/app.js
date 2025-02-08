
document.querySelector("#btn").addEventListener("click", getCustomers);


function getCustomers(){


    // Create an XHR

    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    // load
    xhr.onload = function(){

        if(this.status === 200){

            // console.log(this.responseText);

            const customers = JSON.parse(this.responseText);
            
            let output = "";

            customers.forEach(function(customer){

                output += `
                    <ul>
                        <li>${customer.id}</li>
                        <li>${customer.title}</li>
                        <li>${customer.body}</li>
                    </ul>
                `;

            })

            document.querySelector("#output").innerHTML = output;
        
            

        }

    }

    xhr.send();


}
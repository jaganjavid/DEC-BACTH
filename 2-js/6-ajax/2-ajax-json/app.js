
document.querySelector("#button-1").addEventListener("click", getCustomer);
document.querySelector("#button-2").addEventListener("click", getCustomers);

function getCustomer(){


    // Create an XHR

    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "customer.json", true);

    // load
    xhr.onload = function(){

        if(this.status === 200){

            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText);
        
            const output = `
             <ul>
                <li>${customer.id}</li>
                <li>${customer.name}</li>
                <li>${customer.company}</li>
                <li>${customer.phone}</li>
            </ul>
            `;

            document.querySelector("#customer").innerHTML = output;

        }

    }

    xhr.send();


}


function getCustomers(){


    // Create an XHR

    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "customers.json", true);

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
                        <li>${customer.name}</li>
                        <li>${customer.company}</li>
                        <li>${customer.phone}</li>
                    </ul>
                `;

            })

            document.querySelector("#customers").innerHTML = output;
        
            

        }

    }

    xhr.send();


}


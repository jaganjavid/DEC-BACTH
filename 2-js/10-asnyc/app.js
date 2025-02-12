
async function myFunc() {
    
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => resolve("Hello"),3000)

    })

    const error = true;

    if(!error){
        const res = await promise;
        return res;
    }else{
        await Promise.reject("Some thing went worng");
    }

}

myFunc()
.then(res => console.log(res))
.catch(err => console.log(err));
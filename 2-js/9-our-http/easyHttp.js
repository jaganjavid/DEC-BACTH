

class EasyHTTP{


    // Make an get request

    get(url){
        return new Promise((reslove, reject) => {

            fetch(url)
            .then(res => res.json())
            .then(data => reslove(data))
            .catch(err => reject(err))

        })
    }

    // Make an post

    post(url, data){
        return new Promise((reslove, reject) => {
            fetch(url, {
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => reslove(data))
            .catch(err => reject(err))
        })
    }

     // Make an Update

     put(url, data){
        return new Promise((reslove, reject) => {
            fetch(url, {
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => reslove(data))
            .catch(err => reject(err))
        })
    }

    // Make an Delete

    delete(url){
        return new Promise((reslove, reject) => {
            fetch(url, {
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => reslove("Resource Deleted"))
            .catch(err => reject(err))
        })
    }
}
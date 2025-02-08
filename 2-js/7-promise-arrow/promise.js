

const posts = [
    {title:"Post One", body:"This is a post one"},
    {title:"Post Two", body:"This is a post two"},
];

function createPost(post){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
          
            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            }else{
                reject("No data");
            }

        }, 2000)
    });

}

function getPosts(){

    setTimeout(() => {
      let output = "";
      
      posts.forEach(post => {
        output += `<li>${post.title}</li>`
      })

      document.body.innerHTML = output;

    }, 1000)
    
}

createPost({title:"Post Three", body:"This is a post three"})
.then(getPosts)
.catch((err) => console.log(err));
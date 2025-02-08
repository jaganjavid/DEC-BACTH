

console.log(this);

const obj = {
    name:"Jagan",
    get:function(){
        console.log(this);
        
        function run(){
            console.log(this);
        }

        run();
    }
}

obj.get();
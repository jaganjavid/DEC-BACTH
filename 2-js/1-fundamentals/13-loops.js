

// For Loops

// for(let i = 0; i < 10; i++){

//     if(i === 2){
//         console.log(`${i} is my fav number`);
//         continue;
//     }

//     if(i === 5){
//         console.log(`${i} hit so stop`);
//         break;
//     }

    

//     console.log(i);
// }


const arr = ["Jagan", "Javid", "Kavin"];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

arr.forEach(function(value, index, array){
   console.log(`${value} - ${index}`);
   console.log(array);
})
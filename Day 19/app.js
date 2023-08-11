const arr = [1,3,4,6,9,2,3];

// let result = arr.map(item =>
//     {
//         console.log(item);
//     }
//     )

    // let result = arr.sort((a,b)=> b - a);

//    let result =  arr.filter(item=> item<=3);

function findSum (arr){
    let sum = 0;
    arr.forEach(element => {
       sum += element;
    });
    return sum

}

let result = arr.reduce((acc,curr)=>{
    if(acc < curr){
        acc = curr;
    }
    return acc;
},0)

console.log(findSum(arr))
console.log(result)

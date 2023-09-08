// Map polyfill
// Array.prototype.myMap=function (cb)
// {
//     let newarr = [];
//     for(let i =0; i<this.length; i++){
//         newarr.push(cb(this[i],i))
//     }
//     return newarr;
// }

arr = [1,2,3,4,5,6];
// arr.myMap((data,index)=> 
//     console.log(data,index)
// )
// filter

// let output = arr.filter(data=>{
//     return data>2 
// })


// Filter Polyfill

// Array.prototype.MyFilter = function(cb){
//     let newarr = [];
//     for(let i=0; i < this.length; i++){
//         if(cb(this[i],i))
//             newarr.push(this[i]);
        
//     }
//     return newarr;
// }

// let output = arr.MyFilter(data=>
//     {
//         return data > 3
//     }
//     )
//     console.log(output)


    // reduce
    // let output = arr.reduce((acc,curr)=>{
    //     return    acc+curr
    // }
    // ,0
    // )
    // reduce polyfill
//     Array.prototype.myreduce = function(cb,initalvalue){
//         let acc =  initalvalue
//         for(let i=0; i<this.length; i++){
//             acc = acc ? cb(acc,this[i],i) : this[i];
//         }
//         return acc;
//     }
// let arr1 = [1,2,3,4]
//     let output1 = arr1.myreduce((acc,curr)=>{
//         return acc + curr;
//     },0 ) ;
//     console.log(output1);
    

//     function checkrest(...nums){
//       return  nums.reduce((acc,curr)=>acc+curr,0)
//     }

//     let output2 = checkrest(1,2,3,4,4);
//     console.log(output2)

    // closuers

    function useState(initialValue) {
        
        var state = [initialValue];
  
        function setState(newState) {
         state[0] = newState;
        }
        return [state, setState];
      }
  
      let  [count,setCount] = useState(0);
    setCount(23);
        console.log(count); // This will correctly output: 23 but it give me 0
     
      
      function closuers(){
        let name = "Junaid";
        function displayname(name2){
            name = name2
            console.log(name)
        }
        return displayname;
      }
     let fun = closuers();
     fun("khan");




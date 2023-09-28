let arr=[1,1,2,3,4,4,5];
// remove the duplicate values

let str = "String";

let newstr = str.split("").reverse().join("");
console.log(newstr);



function useStae(parm){
    let newparm = parm;
      function setparam(innerparam){
        return newparm = innerparam;   
     }
     return [newparm,setparam];
}

let [count,setcount] = useStae(0);
setcount(12);
console.log(count);






// function removeduplicate(arr){
//     let check=[];
//     arr.filter(newarr=> {
//         if(check !== ){
//             check.push(newarr)
//         }
//         console.log(newarr,check)
//     })
// }

// removeduplicate(arr);
function countUnique(array){
    array.sort();
    if(array.length > 0){

        let i=0;
        for(let j=1; j<array.length; j++){
            if(array[i] !== array[j]){
                i++;
                array[i]=array[j];
            }
        }
        console.log(i+1);
        array.splice(0 + i+1);
        return `Ouput ${array}`;
    }
    else{
        throw new Error("Array length is 0");
    }
}

// let output = countUnique([1,1,1,2,3,4,5,6])
let output = countUnique([1,2,3,9,9,9,4,5,6,9,8,8])
console.log(output);
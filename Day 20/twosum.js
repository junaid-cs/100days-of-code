let array = [3,2,4]
// test case 
// [4,5] = 9

// array.sort();
console.log(array);

function twoSum(nums, target){
    //  nums.sort;
    let left = 0;
    let right= nums.length - 1;
    while(left < right)
    {

   let sum = nums[left] + nums[right];
   if(sum === target){
       return [left,right];
   }
   else if(sum > target)
   {
       right--;
   }
   else {
       left++;
   }
    }
}

let sum = twoSum(array,6);
console.log(sum);
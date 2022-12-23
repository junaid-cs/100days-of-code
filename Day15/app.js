let http = new easyhttp;
// Get call
// http.get('https://dummyjson.com/products',function(err,response){
// if(err){
//     console.log(err)
// }   
// else
// console.log(response);
// });

// Post Call
let data = {
    title: 'new item',
    description: 'hi  I am new item',
    price : 200,
    }
// http.post('https://dummyjson.com/products/add',data,function(err,response){
//     if(err){
//          console.log(err)
//         }   
//         else
//         console.log(response);
//         });

// put call

// http.put('https://dummyjson.com/products/2',data,function(err,response){
//     if(err){
//          console.log(err)
//         }   
//         else
//         console.log(response);
//         });

// Delete
http.delete('https://dummyjson.com/products/2',function(response){
    
        console.log(response);
        });
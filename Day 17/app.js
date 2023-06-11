let http = new EasyHttp;

//  http.get('https://jsonplaceholder.typicode.com/todos')
// .then(data=>
//     {console.log(data)}
//     )
// .catch(err=>{console.log(err)});

// Data
let data={
    name:'this is custome post',
    username:'junaid'
}


// Post data 

// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data=>
//     {console.log(data)}
//     )
// .catch(err=>{console.log(err)});

// Put data 

// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data=>
//     {console.log(data)}
//     )
// .catch(err=>{console.log(err)});

// Delete data 

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data=>
    {console.log(data)}
    )
.catch(err=>{console.log(err)});
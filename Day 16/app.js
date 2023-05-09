let output = document.querySelector(".output");

let posts=[
{
    title:'Post 1' ,body:"This is Post 1"
},
{
    title:'Post 2' ,body:"This is Post 2"

}
];
console.log("hi");
function creatPost(post,callback){
    posts.push(post);
    callback();
}
function getposts(){

posts.forEach(posts => {
    console.log(posts)
    let lis=`<li> ${posts.title} <br>
    Body :
    ${posts.body}</li>`;
    output.innerHTML+=lis;
});
}
// getposts();
creatPost({title:'Post 3',body:'This is custome post'},getposts)
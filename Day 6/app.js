
function practice1(){
let runagain=true;
while(runagain){
let value=prompt("Enter your age");
value=Number.parseInt(value);
if(value < 0){
    console.error("You can't enter nagative age")
    break;
}
 if(value < 18){
    console.log("You can't drive")
}

else{
    console.log("you can drive");
}
runagain=confirm("Do you want to play again");
}}

function practice2(){
    let color;
    color=prompt("Enter color to change background");
    console.log(color);
    document.body.style.backgroundColor=color;
}
practice2();
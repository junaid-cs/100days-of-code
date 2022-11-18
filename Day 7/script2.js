// let items=document.getElementsByClassName('list-group-item');

// items=items[0];
// items[2].style.color='red';
// items[3].style.background='gray';
// console.log(val);

let lis=document.getElementsByTagName('li');
lis[0].textContent="Hi i am textContent";

lis = Array.from(lis);
lis.reverse();
lis.forEach((item,index)=>{
    item.textContent=`${index} : Multiple selector`;
    if(index%2 == 0){
        item.style.background='#ccc';
    }
    else{
        item.style.background= "#f4f4f4";
    }
});

// querySelectorAll
let items=document.querySelectorAll('.list-group-item');
console.log(items);
let odditems=document.querySelectorAll('li:nth-child(odd)');
odditems.forEach((li)=>{
    li.style.color="red";
    // console.log(li)
})


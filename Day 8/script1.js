let ul=document.querySelector(".list-group");
let lis=document.querySelector(".list-group-item");
let val;
val = ul;
val = lis;
val = ul.childNodes;
val = ul.children[1].id;
val = lis.children[0].getAttribute("href");
// accessing parent
val = lis.parentNode.parentNode;
val = lis.parentElement;
// accessing sibling;
val = lis.nextSibling;
val = lis.nextElementSibling;
val = lis.nextElementSibling.previousElementSibling;
// count of child
val = ul.childElementCount;
console.log(val);
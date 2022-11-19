const li=document.createElement('li');

li.classList='list-group-item d-flex justify-content-between';

li.id='new-item-id';

li.setAttribute('tilte','this is new title');
const a=document.createElement('a');
a.setAttribute('href','#');
a.innerHTML='<i class="fa fa-close"></i>';

let text=document.createTextNode('Hello');
li.appendChild(text);
li.appendChild(a);

const ul =document.querySelector('.list-group');
ul.appendChild(li);

console.log(a);
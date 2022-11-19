const oldheading = document.querySelector('h5');

const newheading=document.createElement('h1');

newheading.className='text-center';
newheading.appendChild(document.createTextNode('Task List'))

let parent = document.querySelector('.col-6');
parent.replaceChild(newheading,oldheading);

const lis=document.querySelectorAll('li');
const ul = document.querySelector('ul');
// lis[0].remove;
let val;
lis[0].remove();
val =lis[0];
ul.children[2].remove();

lis[3].classList.add('new-class');
val =lis[3];
// lis[1].classList.remove('d-flex')
console.log(val);
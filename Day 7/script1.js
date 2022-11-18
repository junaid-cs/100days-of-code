// get element by id
let task; 
task=document.getElementById('task-list');
let val=task.id;
val=task.className;
task.setAttribute('src','this is dumy attribute')
val=task.getAttribute('src');
val=task.style.background ='#ccc';
task.innerText='Change text using innerText';
task.textContent='Using TextContent';
task.innerHTML='<span style="color:red">innerHtml</span>';
console.log(val);

task=document.querySelector('ul li');
task = document.querySelector('li:nth-child(even)').style.background='#f4f4f4';
console.log(task);

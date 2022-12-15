const btn=document.getElementById('change'),
      color=document.getElementById('color'),
      body=document.body;

      btn.addEventListener('click',function(){
       const col1=getrandom(),
            col2=getrandom(),
            col3=getrandom(),
            stringcolor=`rgb(${col1},${col2},${col3})`;
        body.style.background=stringcolor;
        color.innerHTML=stringcolor;
      });



// Function for generate  random numnbers b/w 0 and 256
      function getrandom(){
        return Math.floor(Math.random() *256);
      }
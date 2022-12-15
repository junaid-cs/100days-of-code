let single_btn=document.querySelector('.single-btn');
let single_output=document.querySelector('.single-output');
let multiple_btn=document.querySelector('.multiple-btn');
let multiple_output=document.querySelector('.multiple-output');

// console.log(input);

single_btn.addEventListener('click',loadsingledata)
function loadsingledata(){
    console.log('enter')
    let xml=new XMLHttpRequest;
    xml.open('GET','https://dummyjson.com/products/3',true);
    xml.onprogress = function(){
        single_output.innerHTML = '<h1>Loading</h1>';
        console.log('loading')
    }
    xml.onload = function(){
        if(this.status == 200){
        let response =JSON.parse( this.responseText);
        single_output.innerHTML = ` 
        <li>${response.id}</li>
        <li>${response.brand}</li>
        <li>${response.category}</li>
        <li>${response.discountPercentage}</li>
        <li>${response.description
        }</li>
        `
        // console.log(response);
    }}
    xml.send();
}
// loadsingledata();

multiple_btn.addEventListener('click',loadmultipledata);
function loadmultipledata(e){
   
    let xhr = new XMLHttpRequest;
    xhr.open('GET',`https://dummyjson.com/products`,true);
    xhr.onload = function ()
    {
        if(this.status == 200){
            let input = document.querySelector('[data-input]');
            console.log(input.value)
            input =parseInt( input.value);
            let mul_response=JSON.parse(this.responseText);
            let mu_response=JSON.stringify(this.responseText);
            let output = '';
            data = mul_response.products;
            loop = data.slice(0,input);
            console.log( typeof input);
            loop.forEach(function(response) {
                // console.log(response);
                output +=
                `<li> ${response.id}</li>
                <li> ${response.title}</li>
                <li><img src="${response.images[1]}" alt="" srcset=""> </li>
                `

                multiple_output.innerHTML=output;
            });
        }

    }
    xhr.send();
    e.preventDefault();
}
// loadmultipledata();
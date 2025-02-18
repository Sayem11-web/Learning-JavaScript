const body = document.getElementById('body');
const button= document.querySelectorAll('li');

// console.log(button); 

// const redColor= document.querySelector('.red');
// redColor.addEventListener('click', function(){
//   body.style.backgroundColor= '#ff7675';
// });

// const greenColor= document.querySelector('.green');
// greenColor.addEventListener('click', function(){
//   body.style.backgroundColor= '#55efc4';
// });




//! first STEP
// button.forEach(function (value){
//   value.addEventListener('click', function(){
//     let className= this.classList.value;
//     body.style.backgroundColor= className;  
//   })
// })

//! Final Step

button.forEach(function (value){
  value.addEventListener('click', function(){
    let className= this.classList[0];
    let color = '';
    if(className==='red'){
      color= '#ff7675'
    }
    if(className==='green'){
      color= '#55efc4'
    }
    
    if(className==='black'){
      color= '#2f3542'
    }
    if(className==='yellow'){
      color= '#eccc68'
    }
    if(className==='purple'){
      color= '#a29bfe'
    }
    if(className==='blue'){
      color= '#18dcff'
    }
    if(className==='pink'){
      color= '#ffcccc'
    }
    body.style.backgroundColor= color;  
  })
})
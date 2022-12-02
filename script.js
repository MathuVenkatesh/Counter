// function count(id) {
//   let num = document.getElementById("counter").innerHTML;

//   if (id === "plus") {
//     num++;
//   } else {
//     num--;
//   }
//   // console.log(num);
//   document.getElementById("counter").innerHTML = num;
// }

// let num = document.getElementById("counter").innerHTML;

// function plus() {
//   num++;
//   document.getElementById("counter").innerHTML = num;
// }
// function minus() {
//   if (num > 0) {
//     num--;
//   }
//   document.getElementById("counter").innerHTML = num;
// }


let counterValue = document.querySelector('.value');
let btns = document.querySelectorAll('.btn');
let count = 0;
console.log(btns);

btns.forEach(item =>{
  item.addEventListener('click', function(e){
    let clickedBtn = e.currentTarget.classList;
    if(clickedBtn.contains('dec')){
      count--;
      console.log(count);      
      
    }
    
    else if(clickedBtn.contains('inc')){
      count++;
      console.log(count);
      
    }
   else if(clickedBtn.contains('reset')){
      count = 0;
      console.log(count);
     
    }

    if(count>0){
      counterValue.style.color = 'green';
    }
    else if(count<0){
       counterValue.style.color = 'red';
    }
    else{
       counterValue.style.color = 'black';
    }
    // count>0?counterValue.style.color = 'green':counterValue.style.color = 'red';
    counterValue.textContent = count;
  })
})

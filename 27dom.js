//document object Model
let headingElement=document.getElementById("heading")
let btn=document.querySelector("button")

let para=document.querySelector(".para")

let arr=[10,20,30]
 
//add event listner to btn
btn.addEventListener('click',()=>{
    //styles to headings 
    headingElement.style.color="red";
    headingElement.style.backgroundColor="yellow";
    headingElement.textContent="welcome to DOM"
    para.style.textAlign='center';
    para.style.color='blue';

    document.body.style.backgroundColor='cyan'
})


//document object Model
let headingElement=document.getElementById("heading")
let btn=document.querySelector("button")

let para=document.querySelector(".para")

let arr=[10,20,30,40]

for (let v of arr){
    //create h2 element
    let h2=document.createElement('h2')
    //assign content
    h2.textContent=v
    // add to the dom
    document.body.appendChild(h2)
    
}




//add event listner to btn
btn.addEventListener('click',()=>{
    //styles to headings 
    headingElement.style.color="red";
    headingElement.style.backgroundColor="yellow";
    headingElement.textContent="welcome to DOM";
    document.body.style.backgroundColor='cyan';

})

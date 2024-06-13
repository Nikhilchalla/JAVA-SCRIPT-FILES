let addbtn=document.querySelector('.addbtn')
let inp1=document.querySelector('#fn')
let diffbtn=document.querySelector('.diffbtn')
let inp2=document.querySelector('#sn')
let result=document.querySelector('.result')

addbtn.addEventListener('click',()=>{
    //read values from two in[uts]
    let fn=inp1.value
    let sn=inp2.value
    //find sum
    let sum=(+fn)+ (+sn);
    //display result
    result.textContent=sum;


})

diffbtn.addEventListener('click',()=>{
    //read values from two in[uts]
    let fn=inp1.value
    let sn=inp2.value
    //find sum
    let difference=(+fn)- (+sn);
    //display result
    result.textContent=difference;


})
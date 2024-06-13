//global
var a=10;


function test1(){
    var x=20
    if (x==20){
        //block scope
       let p=123
       console.log(`value of x inside of block is ${p}`)
    }
    
}

function test2(){
    var b=20
    if (a>b){
        return a
    }
    else{
        return b
    }
}

test1()

var result=test2()
console.log(removeEventListener)

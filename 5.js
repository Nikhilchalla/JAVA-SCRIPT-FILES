// find big number

//function expression
var findBig1=function(a,b){
    if (a>b){
        return a;
    }
    else{
        return b;
    }
}

//arrow function
var findBig2=(a,b) => a>b ? a : b

//call findBig2
var result=findBig2(10,20)
console.log(result)

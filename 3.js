//function decleraton
function findBig(first,second){
    if (first>second){
        return first;
    }
    else if (first==second){
        return "both are same"
    }
    else{
        return second;
    }
}
//calling
var result=findBig(10,20)
console.log(result)



//function expression
var x=function(){
    console.log("function called")
}
//call
x()



function test(){
    
    let outside=100;
    //inner function is used to write some private logic 
    function testinner(){
        let inside=123;
        let sum =outside+inside;
        return sum;
        //console.log("outside value is :",outside)
        //console.log("inside value is :",inside)
    }
    //calling testinner
    //testinner()
    return testinner

}

let result=test();
console.log(result())


//inner function

function test(){
    console.log("test function is called")
    //inner function is used to write some private logic 
    function testinner(){
        console.log("testinner function is called")
    }
    //calling testinner
    //testinner()
    return testinner

}

let result=test()
result()

const test=(a)=>{
    console.log(" hey there!",a)

}

//call function
//test(10)


const test1=()=>{
    return "test1"
}

const test2=(a)=>{
    console.log(a())
    console.log("hello")
}

//call back
test2(test1)


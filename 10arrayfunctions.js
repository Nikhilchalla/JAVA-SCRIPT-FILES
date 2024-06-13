let arr=[10,20,30,40,50,250,90,110]


// filter method used to filter data
let valueGreaterThan= arr.filter(a=> a>30)
console.log(valueGreaterThan)

let elementsGreaterThan50And200=arr.filter(a=>a>50 && a<200)
console.log(elementsGreaterThan50And200)

// FILTER METHON CAN BE USED ONLY TO FILTER BUT NOT TO MODIFY !!
let modifiedData=arr.filter(a=>a+10)
console.log(modifiedData)


//map method is used to modify data 
let modifiedData1=arr.map(a=>a+10)
console.log("after modification",modifiedData1)


//for-each method is used to iterate
let iterate1=arr.forEach((a,index)=>{
    console.log(`value at index ${index} is ${a}`)
})

//reduce method (accumulator,element)
let findSumArray=arr.reduce((acc,a)=>acc+a)
console.log("sum is :",findSumArray)

let findsubArray=arr.reduce((acc,a)=>acc-a)
console.log("sub is :",findsubArray)

let minNumber=arr.reduce((acc,a)=>acc<a? acc:a)
console.log("the minimum value is :",minNumber)


//find method is used to search for an element
let findNumber=arr.find(a=>a==30)
if (findNumber==undefined){
    console.log("result not found in array")
}
else{
  console.log("result found  :",findNumber)
}

//find index emthod
let result1=arr.findIndex(a=>a==30)
console.log("result is :",result1)





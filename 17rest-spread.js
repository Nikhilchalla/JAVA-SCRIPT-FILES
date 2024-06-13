// rest syntax in function 
// rest parameter must be at fisrt positon or last in parameters
function test(b,...a){
    console.log("b value is :",b)
    console.log("a is :",a)

}
test(10,20,30,40,50)


//spread syntax in function
// merge array --1
let arr1=[10,20]
let arr2=[30,40]
let mergedArray=[...arr1,...arr2]
console.log(mergedArray)


//merge object --2
let obj1={
    a:10,
    b:20
}
let obj2={
    x:10,
    y:20
}
let mergedObject={...obj1,...obj2}
console.log(mergedObject)


//copy array --3
let skills=['html','css']
let copySkills=[...skills]
skills.push('bootstrap')
console.log("skills are:",skills)
console.log("copied array:",copySkills)


//copy of object --4
let person={
    id:100,
    name:'ravi'
}

let copyperson={...person}
person.city='hyd'
console.log("person:",person)
console.log("copyperson:",copyperson)





//creating a object person
const person={
    id:100,
    name:'raju',
    age:20,
    city:'hyderabad'


}

console.log("name is:",person.name)
console.log("age is:",person.age)

//adding extra properties
person.mobileNumber=235648
console.log(person.mobileNumber)

// add designation 
person.designation='manager'
console.log(person.designation)

//deleting properties from object (if the [property or 
//key is not there no error])
delete person.city
console.log(person)

//modifying name(properties)
person.name='nikhil narayana'
console.log(person.name)


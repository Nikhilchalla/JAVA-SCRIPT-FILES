
const person={
    id:100,
    name:'raju',
    age:20,
    basic:20000,
    skills:['js','html','bootstrap','css'],
    address:{
        street:'kphb',
        city:'hyd',
        pincode:543001
    },
    getSalary:function(){
        //calculate hra
        let hra=this.basic*0.15
        //calculate da
        let da=this.basic*0.1
        //calculate salary
        let salary=this.basic+hra+da
        return salary
        
    }
}

console.log("skills",person.skills)
console.log("address",person.address)
console.log("pincode",person.address.pincode)

//salary=basic+hra+da



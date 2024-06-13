class PersonType{
    //special method
    constructor(id,name,age,skills,basic){

        //object initialization logic
        this.id=id;
        this.name=name;
        this.age=age;
        this.skills=skills;
        this.basic=basic;

    }
    //method
    getSalary(){
        //business logic
        let hra=this.basic*0.15;
        let da=this.basic*0.1
        let salary=this.basic+hra+da;
        return salary

    }
}

//creating person obj
let person1=new PersonType(100,'nikhil',20,['html','css'],20000)
let person2=new PersonType(100,'nikhil',20,['bootstrap','js'],30000)
console.log(person1.getSalary())
console.log(person2.getSalary())

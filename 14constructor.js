// create person constructor
function person(id,name,age,skills,basic){
    //an empty obj is created and ref by (this)
    //obj initialized logic 
    this.id=id;
    this.name=name;
    this.age=age;
    this.skills=skills;
    this.basic=basic;
    this.getSalary=function(){
        let hra=this.basic*0.15;
        let da=this.basic*0.1
        let salary=this.basic+hra+da;
        return salary
    }

}

//creating person obj
let person1=new person(100,'nikhil',20,['html','css'],20000)
console.log(person1)
let person2=new person(100,'nikhil',20,['bootstrap','js'],30000)
console.log(person2)



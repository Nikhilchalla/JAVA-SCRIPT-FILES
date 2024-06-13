let status=true;

//creating a promise
let pobject=new Promise((fulfilled,rejected)=>{
    if(condition==true)
    {
        setTimeout(()=>{

            console.log("promise is resolved")
        },5000)
	}
	else
	{
        // using settime out for difference
		setTimeout(()=>{

            console.log("promise is rejected")
        },2000)
	}


})

//consume abv promise is done by calling then method if fulfilled later catch if rejected
pobject
        .then((message)=>{console.log("message from then is",message)}) // when promise is resolved 
        .catch((err)=>{console.log("error is",err)}) // will be executed if rejected




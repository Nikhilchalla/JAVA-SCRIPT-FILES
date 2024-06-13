let status=true;

//creating a promise
let pobject=new Promise((fulfilled,rejected)=>{
    if(condition==true)
    {
        console.log("promise is resolved")
	}
	else
	{
        console.log("promise is rejected")
	}


})

//consume abv promise is done by calling then method if fulfilled later catch if rejected
pobject
        .then((message)=>{console.log("message from then is",message)}) // when promise is resolved 
        .catch((err)=>{console.log("error is",err)}) // will be executed if rejected


// checking aynchronous (WORKS FINE)
console.log("end line of code")



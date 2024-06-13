
let numberArray=[10,20,30]

for( let i=0;i<numberArray.length;i++){
    //console.log(numberArray[i])
}

//while loop
let i=0;
while(i<numberArray.length){
    //console.log(numberArray[i])
    i++;
}

//for  of -loop
for (let v of numberArray){
   // console.log(v)
}


//for each method



//adding elements intlo array at begining
let x=numberArray.unshift(1,2)
console.log(x)

//adding elements into array at end
numberArray.push(125,6548)
console.log("elemets of array",numberArray)

//adding elements into arry at specified postion/index
// splice(index,no.of elements to remove,insert new elemetn)
numberArray.splice(3,0,1253,658)
console.log(numberArray)

//remove element from the begining
numberArray.shift()
console.log(numberArray)

//remove elemet from end
numberArray.pop()
console.log(numberArray)


//deleting in between of array
numberArray.splice(2,1)
console.log(numberArray) 
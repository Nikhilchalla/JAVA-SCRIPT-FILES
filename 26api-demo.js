fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response.json())// when data is recived from end point 
.then(data=>console.table(data))// we need to extract data from response object
.catch(err=>console.log(err))//if error occurs




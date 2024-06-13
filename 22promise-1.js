let isSongReady=true;

let MusicDirector=new Promise((fulfilled,rejected)=>{
    if (isSongReady==true){
        setTimeout(()=>{
            console.log("hurry..song is out now..")
        },5000);
    }
    else{
        setTimeout(()=>{
            console.log("sorry guys .. new date will be announced soon")
        },5000);
    }
})

//fans that consuming
MusicDirector
    .then((message)=>{console.log(message)})
    .catch((err)=>{console.log("upset for fans..:",err)})


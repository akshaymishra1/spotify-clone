console.log("welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('Songs/1.mp3');

 let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songsItem = Array.from(document.getElementsByClassName('songsItem'));

let songs = [{
songName: "gallan goliyan" ,filePath:"Songs/1.mp3", coverPath:"cover/1.jpg"},
{  songName: "Tum Ho (Rockstar)" , filePath:"Songs/2.MPEG", coverPath:"cover/2.jpg"},
{ songName: "Barbaad- Aabaad (Ludo)" , filePath:"Songs/3.MPEG", coverPath:"cover/3.jpg"}, 
{songName: "tera chahra (Sanam teri kasam)" , filePath:"Songs/4.MPEG", coverPath:"cover/4.jpg"},
{songName: "Kitna chahta hu tujhe" , filePath:"Songs/5.MPEG", coverPath:"cover/5.jpg"}
]
songsItem.forEach((element,i)=>
{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath ;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


}
)


//handle play/pause click

masterPlay.addEventListener('click',()=>{ 
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})
// listen to event
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressbar.value=progress;

})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100;

})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element)=>{
        element.classList.add('fa')
        
    })
    
}

Array.from(document.getElementsByClassName('songsItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause")
    })
})

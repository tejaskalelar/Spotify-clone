console.log("Welcomo to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems =Array.from( document.getElementsByClassName('songItem'))

let songs = [
    {songName : "Let me Love you", filePath:"songs/1.jpg", coverPath: "covers/1.jpg"},
    {songName : "Girls like you", filePath:"songs/2.jpg", coverPath: "covers/2.jpg"},
    {songName : "Attention", filePath:"songs/3.jpg", coverPath: "covers/3.jpg"},
    {songName : "Night Changes", filePath:"songs/4.jpg", coverPath: "covers/4.jpg"},
    {songName : "Dead Bed", filePath:"songs/5.jpg", coverPath: "covers/5.jpg"},
    {songName : "We Dont Talk AnyMore", filePath:"songs/6.jpg", coverPath: "covers/6.jpg"},
    {songName : "Lovers", filePath:"songs/7.jpg", coverPath: "covers/7.jpg"},
    {songName : "Love Story", filePath:"songs/8.jpg", coverPath: "covers/8.jpg"},
    {songName : "Shape of You", filePath:"songs/9.jpg", coverPath: "covers/9.jpg"},
    {songName : "Kundi laga lo saiya", filePath:"songs/10.jpg", coverPath: "covers/10.jpg"},
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle Play/pause

masterPlay.addEventListener('click',() =>{
    if(audioElement.paused  || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 1;


    }
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
    })
}

// listen to event 
audioElement.addEventListener('timeupdate',() =>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress
    })

myProgressBar.addEventListener('change' , () =>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText  = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById(`next`).addEventListener('click', () =>{
    if(songIndex>10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText  = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


document.getElementById(`next`).addEventListener('click', () =>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText  = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
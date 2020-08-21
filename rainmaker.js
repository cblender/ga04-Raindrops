                       /*
/*$$$$$$$             /$$                                  /$$
| $$__  $$           /$$$                                 | $$                          
| $$  \ $$           \__/                                 | $$                          
| $$  | $$  /$$$$$$  /$$ /$$$$$$$  /$$$$$$/$$$$   /$$$$$$ | $$   /$$  /$$$$$$   /$$$$$$ 
| $$$$$$$/ |____  $$| $$| $$__  $$| $$_  $$_  $$ |____  $$| $$  /$$/ /$$__  $$ /$$__  $$
| $$__  $$  /$$$$$$$| $$| $$  \ $$| $$ \ $$ \ $$  /$$$$$$$| $$$$$$/ | $$$$$$$$| $$  \__/
| $$  \ $$ /$$__  $$| $$| $$  | $$| $$ | $$ | $$ /$$__  $$| $$_  $$ | $$_____/| $$      
| $$  | $$|  $$$$$$$| $$| $$  | $$| $$ | $$ | $$|  $$$$$$$| $$ \  $$|  $$$$$$$| $$      
|__/  |__/ \_______/|__/|__/  |__/|__/ |__/ |__/ \_______/|__/  \__/ \_______/|__/
________________________________________________________________________________________
// BACKGROUND AMBIENT AUDIO PLAYER SCRIPT BY CHRIS BLENDERMANN                        */     

// TADA!  Random video array!
// NOTE: You can change this array to change what youtube videos are loaded.
var videos = ['gVKEM4K8J8A','nRBCFsU_KDc','jygQI4xM8Rg','GrOMjUtlKu4'];
var video = randomIndex(videos);

function randomIndex(array) {
    return array[Math.floor(Math.random()*array.length)];
}

console.log(videos);
console.log(video);

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code loads.
// NOTE: You can specify the size of the embedded video player.  It is set to "0" by default for audio-only functionality.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: video,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }  
    });
}

// The API will call this function when the video player is ready.
// The SETVOLUME method defines the default volume (out of 100).  Recommend NEVER going over 50 for background sound.
var volume = 13;

function onPlayerReady(event) {
    event.target.setVolume(volume);
    event.target.playVideo();
}

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1), the player should play for one hour and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 3600000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

function startVideo() {
    player.setVolume(volume);
    player.playVideo();
}

// HOTFIX TO PREVENT VIDEO FROM FAILING TO PLAY ON PAGELOAD
// setTimeout(startVideo(), 1069);
// THE HOTFIX KILLS THE BUTTONS OMEGARIP



                                 /*$                         /$$          
                                | $$                        | $$          
  /$$$$$$$  /$$$$$$  /$$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$ | $$  /$$$$$$$
 /$$_____/ /$$__  $$| $$__  $$|_  $$_/   /$$__  $$ /$$__  $$| $$ /$$_____/
| $$      | $$  \ $$| $$  \ $$  | $$    | $$  \__/| $$  \ $$| $$|  $$$$$$ 
| $$      | $$  | $$| $$  | $$  | $$ /$$| $$      | $$  | $$| $$ \____  $$
|  $$$$$$$|  $$$$$$/| $$  | $$  |  $$$$/| $$      |  $$$$$$/| $$ /$$$$$$$/
 \_______/ \______/ |__/  |__/   \___/  |__/       \______/ |__/|______*/

//=======================================================================================
var muted = false;                              // AUDIO FX STATE MANAGER (MUTED/UNMUTED)
//=======================================================================================

 // BUTTON: STOP
 // QUERYSELECTOR SHOULD BE TARGETED TO THE APPROPRIATE CLASSNAME FOR THE CURRENT PROJECT
const buttStop = document.querySelector(".buttAudioStop");
console.log(buttStop);
buttStop.addEventListener("click", stopAudio);

function stopAudio() {
    stopVideo();
    muted = true;
    console.log("Is the audio muted? - ",muted);                                 // TEXT LOGGER
}

//BUTTON: START
// QUERYSELECTOR SHOULD BE TARGETED TO THE APPROPRIATE CLASSNAME FOR THE CURRENT PROJECT
const buttPlay = document.querySelector(".buttAudioStart");
console.log(buttPlay);
buttPlay.addEventListener("click", startAudio);

function startAudio() {
    startVideo();
    muted = false;
    console.log("Is the audio muted? - ",muted);                                 // TEXT LOGGER
}
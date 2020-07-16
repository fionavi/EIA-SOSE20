
function playSample(sound: string): void {
    if (isRecording) {
        givenBeat.push(sound);
    }
    let audios: HTMLAudioElement = new Audio(sound);
    audios.play();
}

window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", function () { playSample("sounds/hihat.mp3"); });
    document.querySelector(".button2").addEventListener("click", function () { playSample("sounds/kick.mp3"); });
    document.querySelector(".button3").addEventListener("click", function () { playSample("sounds/snare.mp3"); });
    document.querySelector(".button4").addEventListener("click", function () { playSample("sounds/A.mp3"); });
    document.querySelector(".button5").addEventListener("click", function () { playSample("sounds/C.mp3"); });

    document.querySelector("#playbutton").addEventListener("click", playStop);
    document.querySelector("#deletebutton").addEventListener("click", deleteBeat);
    document.querySelector("#micbutton").addEventListener("click", createBeat);

});

function playStop() {
    var play = document.querySelector("#playbutton");
    if (play.getAttribute("class") == "fas fa-play") {
        play.setAttribute("class", "fas fa-stop");
        startBeat();
    } else {
        play!.setAttribute("class", "fas fa-play");
        stopBeat();
    }
}



let beatIntervalId: number;
var givenBeat: string[] = ["sounds/hihat.mp3", "sounds/kick.mp3", "sounds/snare.mp3"];
let isRecording: boolean = false;

function startBeat() {

    var counter: number = 0;
    beatIntervalId = setInterval(function () {
        playSample(givenBeat[counter]);
        counter += 1;
        if (counter >= givenBeat.length) {
            counter = 0;
        }
    }, 600);
}


function stopBeat() {
    clearInterval(beatIntervalId);
}


function deleteBeat() {
    givenBeat = [];
}


function createBeat() {
    
    if (isRecording == false) {
        isRecording = true;
        document.getElementById("#micbutton").style.background = "#99adf1";
    } else {
        isRecording = false;
    }

}



function isRec() {
    var play = document.querySelector("#recbutton");
    if (play.getAttribute("id") == "micbutton") {
        play.setAttribute("id", "recbutton");
        createBeat();
    } else {
        play!.setAttribute("id", "micbutton");
        stopBeat();
    }
}

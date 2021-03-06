"use strict";
//ZUsammenarbeit mit Colleen Zeller
function playSample(sound) {
    if (isRecording) {
        givenBeat.push(sound);
    }
    let audios = new Audio(sound);
    audios.play();
}
window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", function () { playSample("sounds/hihat.mp3"); });
    document.querySelector(".button2").addEventListener("click", function () { playSample("sounds/kick.mp3"); });
    document.querySelector(".button3").addEventListener("click", function () { playSample("sounds/snare.mp3"); });
    document.querySelector(".button4").addEventListener("click", function () { playSample("sounds/A.mp3"); });
    document.querySelector(".button5").addEventListener("click", function () { playSample("sounds/C.mp3"); });
    document.querySelector(".button6").addEventListener("click", function () { playSample("sounds/F.mp3"); });
    document.querySelector(".button7").addEventListener("click", function () { playSample("sounds/G.mp3"); });
    document.querySelector(".button8").addEventListener("click", function () { playSample("sounds/laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("click", function () { playSample("sounds/laugh-2.mp3"); });
    document.querySelector("#playbutton").addEventListener("click", playStop);
    document.querySelector("#deletebutton").addEventListener("click", deleteBeat);
    document.querySelector("#micbutton").addEventListener("click", createBeat);
});
function playStop() {
    var play = document.querySelector("#playbutton");
    if (play.getAttribute("class") == "fas fa-play") {
        play.setAttribute("class", "fas fa-stop");
        startBeat();
    }
    else {
        play.setAttribute("class", "fas fa-play");
        stopBeat();
    }
}
let beatIntervalId;
var givenBeat = ["sounds/hihat.mp3", "sounds/kick.mp3", "sounds/snare.mp3"];
let isRecording = false;
function startBeat() {
    var counter = 0;
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
    }
    else {
        isRecording = false;
    }
}
function isRec() {
    var play = document.querySelector("#recbutton");
    if (play.getAttribute("id") == "micbutton") {
        play.setAttribute("id", "recbutton");
        createBeat();
    }
    else {
        play.setAttribute("id", "micbutton");
        stopBeat();
    }
}
//# sourceMappingURL=Aufgabe8.js.map
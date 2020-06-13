//Colleen Zeller hat mir geholfen


var audio1: any = new Audio ("sounds/hihat.mp3");
var audio2: any = new Audio ("sounds/kick.mp3");
var audio3: any = new Audio ("sounds/snare.mp3");
var audio4: any = new Audio ("sounds/A.mp3");
var audio5: any = new Audio ("sounds/C.mp3");
var audio6: any = new Audio ("sounds/F.mp3");
var audio7: any = new Audio ("sounds/G.mp3");
var audio8: any = new Audio ("sounds/laugh-1.mp3");
var audio9: any = new Audio ("sounds/laugh-2.mp3");



function playSample(sound: number): void { 
    if (sound == 1) {
        audio1.play();
    }

    if (sound == 2) {
        audio2.play();
    }

    if (sound == 3) {
        audio3.play();
    }


    if (sound == 4) {
        audio4.play();
    }

    if (sound == 5) {
        audio5.play();
    }

    if (sound == 6) {
        audio6.play();
    }

    if (sound == 7) {
        audio7.play();
    }

    if (sound == 8) {
        audio8.play();
    }

    if (sound == 9) {
        audio9.play();
    }
}

window.addEventListener("load", function () {
    document.querySelector(".button1")?.addEventListener("click", function () { playSample(1); });
    document.querySelector(".button2")?.addEventListener("click", function () { playSample(2); });
    document.querySelector(".button3")?.addEventListener("click", function () { playSample(3); });
    document.querySelector(".button4")?.addEventListener("click", function () { playSample(4); });
    document.querySelector(".button5")?.addEventListener("click", function () { playSample(5); });
    document.querySelector(".button6")?.addEventListener("click", function () { playSample(6); });
    document.querySelector(".button7")?.addEventListener("click", function () { playSample(7); });
    document.querySelector(".button8")?.addEventListener("click", function () { playSample(8); });
    document.querySelector(".button9")?.addEventListener("click", function () { playSample(9); });
    document.querySelector(".playbutton")?.addEventListener("click", function () { beat(); });
});



function beat() {

    setInterval( function() {
    audio1.play();
    audio2.play();
    audio3.play();
    
},           500);

}
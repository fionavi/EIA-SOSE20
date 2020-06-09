console.log("hallo welt");

function playSample(): string {
   var sounds: any [#audio1, #audio2, #audio3, #audio4, #audio5, #audio6, #audio7, #audio8, #audio9 ]
   var audio: string = new Audio (sounds);
    audio.play();
  }


window.addEventListener("load", function() {

document.querySelector(".button1").addEventListener("click", function () { playSample(0); });
document.querySelector(".button2").addEventListener("click", function () { playSample(1); });
document.querySelector(".button3").addEventListener("click", function () { playSample(2); });
document.querySelector(".button4").addEventListener("click", function () { playSample(3); });
document.querySelector(".button5").addEventListener("click", function () { playSample(4); });
document.querySelector(".button6").addEventListener("click", function () { playSample(5); });
document.querySelector(".button7").addEventListener("click", function () { playSample(6); });
document.querySelector(".button8").addEventListener("click", function () { playSample(7); });
document.querySelector(".button9").addEventListener("click", function () { playSample(8); });

}

console.log("hallo hallo hallo");

var audio1 = new Audio("#audio1");
var audio2 = new Audio("#audio2");
var audio3 = new Audio("#audio3");
var audio4 = new Audio("#audio4");
var audio5 = new Audio("#audio5");
var audio6 = new Audio("#audio6");
var audio7 = new Audio("#audio7"); 
var audio8 = new Audio("#audio8"); 

audio1.play();
audio2.play();
audio3.play();
audio4.play();
audio5.play();
audio6.play();
audio7.play();
audio8.play();

function playSample () {
var drumsounds: string = ["audio1", "audio2", "audio3", "audio4", "audio4", "audio6", "audio7", "audio8", "audio9"];
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

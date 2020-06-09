"use strict";
var button1 = new Audio("https://raw.githubusercontent.com/gabriel-rausch/EIA1-SoSe20/master/L07/task_material/assets/hihat.mp3");
button1.play();
var button2 = "kick";
var button3 = "snare";
var button4 = "A";
var button5 = "C";
var button6 = "F";
var button7 = "G";
var button8 = "laugh1";
var button9 = "laugh2";
function playSample() {
    button1.getElementById("#audio1").play();
    button2.getElementById("#audio2").play();
    button3.getElementById("#audio3").play();
    button4.getElementById("#audio4").play();
    button5.getElementById("#audio5").play();
    button6.getElementById("#audio6").play();
    button7.getElementById("#audio7").play();
    button8.getElementById("#audio8").play();
    button9.getElementById("#audio9").play();
}
window.addEventListener("load", function () {
    document.querySelector(".button1")?.addEventListener("click", playSample);
});
//# sourceMappingURL=drumpad.js.map
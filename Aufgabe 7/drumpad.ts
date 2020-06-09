var button1 = new Audio("https://raw.githubusercontent.com/gabriel-rausch/EIA1-SoSe20/master/L07/task_material/assets/hihat.mp3");
button1.play();
var button2: any = "kick";
var button3: any = "snare";
var button4: any = "A";
var button5: any = "C";
var button6: any = "F";
var button7: any = "G";
var button8: any = "laugh1";
var button9: any = "laugh2";




function playSample(): void {

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

window.addEventListener("load", function() {

    document.querySelector(".button1")?.addEventListener("click", playSample);
});
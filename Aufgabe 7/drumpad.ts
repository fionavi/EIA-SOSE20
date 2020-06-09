
console.log("hallo welt");
console.log("hallo welt");
console.log("hallo welt");
console.log("hallo welt");
console.log("hallo welt");
console.log("hallo welt");

function playSample(): string {
   let sounds [#audio1, #audio2, #audio3, #audio4, #audio5, #audio6, #audio7, #audio8, #audio9 ]
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



window.addEventListener("load", function() {

    var audio[] = [ "#audio1", "kick.mp3", "snare.mp3", "A.mp3", "C.mp3", "F.mp3", "G.mp3", "laugh-1.mp3", "laugh-2.mp3" ];
    //var audio: string [] = new Audio [ "hihat.mp3", "kick.mp3", "snare.mp3", "A.mp3", "C.mp3", "F.mp3", "G.mp3", "laugh-1.mp3", "laugh-2.mp3" ];
    audio.play();
    }
    
    document.querySelector(".button1").addEventListener("click", function () { playSample(0); }
    document.querySelector(".button2").addEventListener("click", function () { playSample(1); }
    document.querySelector(".button3").addEventListener("click", function () { playSample(2); }
    document.querySelector(".button4").addEventListener("click", function () { playSample(3); }
    document.querySelector(".button5").addEventListener("click", function () { playSample(4); }
    document.querySelector(".button6").addEventListener("click", function () { playSample(5); }
    document.querySelector(".button7").addEventListener("click", function () { playSample(6); }
    document.querySelector(".button8").addEventListener("click", function () { playSample(7); }
    document.querySelector(".button9").addEventListener("click", function () { playSample(8); }
    
    });

    
function playSample(): string {
    var button2: string = "kick";
    var button3: string = "snare";
    var button4: string = "A";
    var button5: string = "C";
    var button6: string = "F";
    var button7: string = "G";
    var button8: string = "laugh1";
    var button9: string = "laugh2";
    
    var sounds: string [] = [ #audio1, #audio2, #audio3 , #audio4];
    audio = new Audio(sounds [nummer]);
    audio.play(audio);
    
    }
    
    
    





//2. versuch:



function playSample(): string {
    var audio: string = new Audio ["hihat.mp3", "kick.mp3", "snare.mp3", "A.mp3", "C.mp3", "F.mp3", "G.mp3", 'laugh-1.mp3", "laugh-2.mp3"];
    audio.play();
  }

window.addEventListener("load", function() {

document.querySelector(".button1").addEventListener("click", function (nummer) { playSample(0); });
document.querySelector(".button2").addEventListener("click", function () { playSample(1); });
document.querySelector(".button3").addEventListener("click", function () { playSample(2); });
document.querySelector(".button4").addEventListener("click", function () { playSample(3); });
document.querySelector(".button5").addEventListener("click", function () { playSample(4); });
document.querySelector(".button6").addEventListener("click", function () { playSample(5); });
document.querySelector(".button7").addEventListener("click", function () { playSample(6); });
document.querySelector(".button8").addEventListener("click", function () { playSample(7); });
document.querySelector(".button9").addEventListener("click", function () { playSample(8); });

}

"use strict";
// Zusammenarbeit mit Colleen Zeller
var kinder = 3;
window.addEventListener("load", function () {
    document.querySelectorAll(".delete").addEventListener("click", function () { removeElement(); });
    document.querySelectorAll(".delete").addEventListener("click", function () { removeElement(); });
    document.querySelectorAll(".delete").addEventListener("click", function () { removeElement(); });
});
function addElement() {
    var li = document.createElement("li"); //erstelle neues Listenelement
    document.getElementById("LI").appendChild(li); // füge neues li in ul "LI" ein
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox); // füge zu li noch checkbox hinzu
    var inputValue = document.getElementById("myInput").value; // Inhalt von "input" von "myInput" beziehen
    var text = document.createTextNode(inputValue); // Inhalt von value ist ein Text
    li.appendChild(text); // füge Textinhalt zu neuem li hinzu
    var icon = document.createElement("i"); //erstelle ein Element
    icon.className = "fas fa-trash-alt delete"; //gebe Elemet Klasse "fas..."
    icon.addEventListener("click", function () { removeElement(kinder); });
    li.appendChild(icon); //füge zu neuem li Element das Icon hinzu
    kinder++;
    counter();
}
function removeElement(feld) {
    var LI = document.getElementById("LI");
    var task = 0;
    LI.removeChild(LI.childNodes[feld]);
}
kinder--;
counter();
function counter() {
    var index = 0;
    console.log("Anzahl Aufgaben:" + kinder);
    document.getElementById("count").innerText = "Es gibt " + kinder + " Aufgaben zu erledigen.";
}
//# sourceMappingURL=Aufgabe9.js.map
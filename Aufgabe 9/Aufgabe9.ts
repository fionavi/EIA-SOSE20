// Zusammenarbeit mit Colleen Zeller
console.log("hahahahahio");
var kinder: number = 3;

window.addEventListener("load", function () {
  document.querySelectorAll(".delete").addEventListener("click", function () { removeElement(); });
  document.querySelectorAll(".delete").addEventListener("click", function () { removeElement(); });
  document.querySelectorAll(".delete").addEventListener("click", function () { removeElement(); });
});



function addElement(): void {

  var li: HTMLLIElement = document.createElement("li");                       //erstelle neues Listenelement
  document.getElementById("LI").appendChild(li);               // füge neues li in ul "LI" ein

  var checkbox: HTMLInputElement = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);                                    // füge zu li noch checkbox hinzu


  var inputValue: string = document.getElementById("myInput").value;    // Inhalt von "input" von "myInput" beziehen
  var text: Text = document.createTextNode(inputValue);               // Inhalt von value ist ein Text
  li.appendChild(text);                                         // füge Textinhalt zu neuem li hinzu



  var icon: HTMLElement = document.createElement("i");                     //erstelle ein Element
  icon.className = "fas fa-trash-alt delete";                            //gebe Elemet Klasse "fas..."
  icon.addEventListener("click", function () { removeElement(kinder); });
  li.appendChild(icon);                                       //füge zu neuem li Element das Icon hinzu

  kinder++;

  counter();
}



function removeElement(feld: number): void {

  var LI = document.getElementById("LI");
  var task: number = 0;
  LI.removeChild(LI.childNodes[feld]);
  // LI.removeChild(LI.childNodes[1]);
  // LI.removeChild(LI.childNodes[2]);
}

kinder--;
counter();

}



function counter(): void {
  var index: number = 0;
  console.log("Anzahl Aufgaben:" + kinder);
  document.getElementById("count").innerText = "Es gibt " + kinder + " Aufgaben zu erledigen.";

}
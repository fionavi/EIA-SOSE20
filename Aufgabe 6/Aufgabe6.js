"use strict";
var emissionAbsolutEurope = 4209.3;
var relativeEurope = 100 / (31116.5 / 4209.3);
var growthEurope = ((4209.3 - 4965.7) / 4965.7) * 100;
var growthAbsoluteEurope = 4209.3 - 4965.7;
var emissionAbsolutNorthA = 6035.6;
var relativeNorthA = 100 / (31116.5 / 6035.6);
var growthNorthA = (6035.6 - 6600.4) / 6600.4;
var growthAbsoluteNorthA = 6035.6 - 6600.4;
var emissionAbsolutSouthA = 1261.5;
var relativeSouthA = 100 / (31116.5 / 1261.5);
var growthSouthA = (1261.5 - 1132.6) / 1132.6;
var growthAbsoluteSouthA = 1261.5 - 1132.6;
var emissionAbsolutAfrica = 1235.5;
var relativeAfrica = 100 / (31116.5 / 1235.5);
var growthAfrica = (1235.5 - 1028) / 1028;
var growthAbsoluteAfrica = 1235.5 - 1028;
var emissionAbsolutAsia = 16274.1;
var relativeAsia = 100 / (31116.5 / 16274.1);
var growthAsia = ((16274.1 - 12954.7) / 12954.7) * 100;
var growthAbsoluteAsia = 16274.1 - 12954.7;
var emissionAbsolutAustralia = 2100.5;
var relativeAustralia = 100 / (31116.5 / 2100.5);
var growthAustralia = ((2100.5 - 1993) / 1993) * 100;
var growthAbsoluteAustralia = 2100.5 - 1993;
function myeurope() {
    document.querySelector("#titleRegion").innerHTML = "Europe";
    document.querySelector(".chart").setAttribute("style", "height:" + relativeEurope + "px");
    document.querySelector("#europa1").innerHTML = emissionAbsolutEurope;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#europa2").innerHTML = relativeEurope;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#europa3").innerHTML = growthEurope;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#europa4").innerHTML = growthAbsoluteEurope;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
myeurope();
function mynorthamerica() {
    document.querySelector("#titleRegion").innerHTML = "North America";
    document.querySelector(".chart").setAttribute("style", "height:" + relativeNorthA + "px");
    document.querySelector("#europa1").innerHTML = emissionAbsolutNorthA;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#europa2").innerHTML = relativeNorthA;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#europa3").innerHTML = growthNorthA;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#europa4").innerHTML = growthAbsoluteNorthA;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
mynorthamerica();
function mysouthamerica() {
    document.querySelector("#titleRegion").innerHTML = "South America";
    document.querySelector(".chart").setAttribute("style", "height:" + relativeSouthA + "px");
    document.querySelector("#europa1").innerHTML = emissionAbsolutSouthA;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#europa2").innerHTML = relativeSouthA;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#europa3").innerHTML = growthSouthA;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#europa4").innerHTML = growthAbsoluteSouthA;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
mysouthamerica();
function myafrica() {
    document.querySelector("#titleRegion").innerHTML = "Africa";
    document.querySelector(".chart").setAttribute("style", "height:" + relativeAfrica + "px");
    document.querySelector("#europa1").innerHTML = emissionAbsolutAfrica;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#europa2").innerHTML = relativeAfrica;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#europa3").innerHTML = growthAfrica;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#europa4").innerHTML = growthAbsoluteAfrica;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
myafrica();
function myasia() {
    document.querySelector("#titleRegion").innerHTML = "Asia";
    document.querySelector(".chart").setAttribute("style", "height:" + relativeAsia + "px");
    document.querySelector("#europa1").innerHTML = emissionAbsolutAsia;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#europa2").innerHTML = relativeAsia;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#europa3").innerHTML = growthAsia;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#europa4").innerHTML = growthAbsoluteAsia;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
myasia();
function myaustralia() {
    document.querySelector("#titleRegion").innerHTML = "Australia";
    document.querySelector(".chart").setAttribute("style", "height:" + relativeAustralia + "px");
    document.querySelector("#europa1").innerHTML = emissionAbsolutAustralia;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#europa2").innerHTML = relativeAustralia;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#europa3").innerHTML = growthAustralia;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#europa4").innerHTML = growthAbsoluteAustralia;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
myaustralia();
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", myeurope);
    document.querySelector(".northamerica").addEventListener("click", mynorthamerica);
    document.querySelector(".southamerica").addEventListener("click", mysouthamerica);
    document.querySelector(".africa").addEventListener("click", myafrica);
    document.querySelector(".asia").addEventListener("click", myasia);
    document.querySelector(".australia").addEventListener("click", myaustralia);
});
//# sourceMappingURL=Aufgabe6.js.map
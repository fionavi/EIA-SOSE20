console.log("Nordamerika");



var emissionAbsolutNorthA: number = 6035.6;


var relativeNorthA: number = 31116.5 / 100 * 6035.6;


var growthNorthA: number = (6035.6 - 6600.4) / 6600.4;


var growthAbsoluteNorthA: number = 6035.6 - 6600.4;



console.log("Die Emission von Nordamerika ist: " + emissionAbsolutNorthA + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + relativeNorthA + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + growthNorthA + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + growthAbsoluteNorthA + "kg CO2");

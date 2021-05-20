
/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsrumpf (body)
function test()
{
console.log("Hallo Jan, das ist ein test");
}

// Funktionsaufruf (call)
//test();


/***** Funktionen 02a *****/
// Parametrisierung + Datenübergabe von Innen

function ausgabeName ()
{
    let firstName = "Deniz"; // Variable ist lokal! --> Nur innerhalb der funktion gültig
    console.log("Hallo " + firstName + "!");
}

// ausgabeName();
// console.log(firstName);


/***** Funktionen 02b *****/
// Parametrisierung + Datenübergabe von Außen

function ausgabeNameParam (firstName) //Parameter, wird hier definiert
{
    // wenn firstName leer, dann "nobody"
    if (firstName == undefined || firstName == "") {
        firstName = "nobody";
    }
    console.log("Hallo " + firstName + "!");    
}

// ausgabeNameParam("Deniz"); // Call + Argument
// ausgabeNameParam(); // Call ohne Argument
// ausgabeNameParam(prompt("Bitte Namen eingeben")); // Call mit Abfrage


/***** Funktionen 02c *****/
// Mehrere Parameter

function ausgabeNameParams (firstName, familyName) // Parameter
{
    console.log("Hallo " + firstName + " " + familyName + "!");    
}

ausgabeNameParams("Jan-Daniel", "Martin");
ausgabeNameParams(prompt("Bitte Vornamen eingeben:"), prompt("Bitte Nachnamen eingeben:"));

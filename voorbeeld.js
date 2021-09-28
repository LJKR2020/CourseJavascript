// H1.3
// console.log("Jippie, hij doet het!");

// H2.2
// console.log("Hallo daar!");
// console.log("Ik zie dat je de console.log functie aan het uitproberen bent!");
// console.log("Zal ik een figuurtje voor je maken?");
// console.log("1, 2, 3...")
// console.log("*****");
// console.log(" ***");
// console.log("  *");
// console.log("  *");
// console.log("  *");
// console.log("  *");
// console.log("  *");

// H2.3
let quantity;
quantity = 3;
// console.log(quantity)

// let is used at variables that can change
// const is used with variables that don't change.

let greeter = "Hoihoi!";
greeter = "Goeiemorgen!";
// console.log(greeter);
greeter = "Hallo allemaal!";
// console.log(greeter);

let greeter1 = "Hoihoi";
greeter1 = "Hallo allemaal";
// console.log(greeter1); // geeft “TypeError: Assignment to constant variable.”

// H2.5
// console.log(2+2); // geeft 4
// console.log("2" + 2); // geeft 22
// console.log(2 + "2"); // geeft 22
// console.log("2" + "2" - 6) // geeft 16

const houseNumber = 12;
// console.log(houseNumber);
const street = "Prinsenlaan";
// console.log(street);
const address = street + houseNumber; // geeft “Prinsenlaan12” (zonder spatie)
// console.log(address);
const score1 = "zeven";
// console.log(score1);
const score2 = "vier";
// console.log(score2);
const total = score1 * score2;
// console.log(total);
// Geeft NaN (Not A Number) want je kunt “zeven” en “vier” niet converteren naar een getal

// H2.7 Beslissingsstructuren
// let grade = 8;
// if (grade >= 5.5) {
//     // het eerste blok wordt uitgevoerd als de conditie true is
//     console.log("Je hebt het gehaald!");
// } else {
//     // het tweede blok wordt uitgevoerd als de conditie false is
//     console.log("Je hebt het niet gehaald..");
// }
// code gaat hier weer verder

// if (recipe !== undefined) { // als recipe al toegewezen is..
//     // print dan de naam van het recept
//     console.log("Vandaag maken we het recept: " + recipe);
// } else {
//     recipe = "Spinazie lasagne"; // en anders… wijs recipe toe
// }

// const grade = 4;
// const isPassed = grade >= 5.5;  // geeft false
// console.log("Student passed: " + isPassed) // geeft "Student passed: false"

// if ((ingredients !== undefined) && (ingredients.length > 3)) {
//     console.log("We kunnen boodschappen doen!");
// }

const grade = 8.7;

if (grade < 5.5) {
    console.log('Onvoldoende');
} else if ((grade >= 5.5 && grade < 8)) {
    console.log('Voldoende');
} else {
    console.log('Goed');
} // geeft “Goed” want geen van bovenstaande condities is waar op dit moment

// een andere manier:
const grade1 = 8.7;

if (grade1 < 5.5) {
    console.log('Onvoldoende');
}
if ((grade1 >= 5.5 && grade < 8)) {
    console.log('Voldoende');
}
if (grade1 >= 8){
    console.log('Goed');
}
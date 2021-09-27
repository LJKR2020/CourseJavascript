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
console.log(houseNumber);
const street = "Prinsenlaan";
console.log(street);
const address = street + houseNumber; // geeft “Prinsenlaan12” (zonder spatie)
console.log(address);
const score1 = "zeven";
console.log(score1);
const score2 = "vier";
console.log(score2);
const total = score1 * score2;
console.log(total);
// geeft NaN (Not A Number) want je kunt “zeven” en “vier” niet converteren naar een getal
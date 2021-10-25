// ===  Opdracht 1 ===
// Maak een object met daarin jouw voornaam (string), achternaam (string), leeftijd (getal) en geboortedatum (date object). De datum hoeft niet geformat te worden.
// Log dit in de terminal.

const personalia = {
    firstname: 'LJ',
    lastname: 'KR',
    age: 31,
    // dateOfBirth: '28-08-1990',
    dateOfBirth: new Date(1990, 7, 29)
    // fixed dateObject
}

console.log(personalia);

// ===  Opdracht 2 ===
// Zorg ervoor dat de volgende string in de terminal wordt gelogd:
// "Hoi! Ik ben <voornaam>, ik ben <leeftijd> jaar oud."

console.log('Hoi! ik ben', personalia.firstname, ', ik ben', personalia.age, 'jaar oud.')
// In de uitwerkingen branch wordt + gebruikt. Ik heb gemerkt dat je dan spaties
// moet toevoegen en met een , hoeft dat niet.

// === Opdracht 3: bekijk het volgende object ===

const product = {
    productName: "Smeg Waterkoker",
    series: "Smeg jaren 50 retro lijn",
    material: ["roestvrijstaal", "kunststof"],
    color: "creme",
    wireless: false,
    "b-h-d": "17 x 24,6 x 22,3 cm",
};

// 3a. Log de naam van de serie in de terminal.
console.log(product.series);

// 3b. Overschrijf de oude waarde van de property color ("creme") naar "roze". Log het object in de terminal om te checken of het gelukt is.
product.color = 'roze';
console.log(product.color);

// 3c. Log de tweede materiaalsoort ("kunststof") in de terminal
console.log(product.material[1]);

// 1d. Log de afmetingen (b-h-d) in de terminal
console.log(product['b-h-d']);

// === Opdracht 4 ===
// Declareer een variabele met daarin een string die het product beschrijft. Gebruik hiervoor de properties productName en material uit het object.
// ---- Verwachte uitkomst:
// "De Smeg Waterkoker is gemaakt van roestvrijstaal en kunststof"

const productText = 'De' + product.productName + ' is gemaakt van ' + product.material[0] + ' en ' + product.material[1];
console.log(productText)

// Blijf opletten dat je concequent bent met "" of '' dan wel het toevoegen van ; of niet.
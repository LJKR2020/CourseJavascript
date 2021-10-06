// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen (zoals 2021) in op. Log dit in de terminal.
// ==========================================

const years = ['1990', '2008', '2019', '2020'];
console.log(years);

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies (zoals muziek luisteren en koekjes eten) in op. Log dit in de terminal.
// ==========================================

const hobby = ['hiken', 'puzzelen', 'gamen'];
console.log(hobby);

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Zorg er nu voor dat je de eerste waarde uit die array in de terminal logt             // geeft 3
// ==========================================

const numbers = [3, 4, 5, 7, 2];
console.log(numbers[0]);

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje.
// Nu gaan we de waardes weer aanspreken!
// 4b. Zorg ervoor dat je de vijfde waarde uit bovenstaande array in de terminal logt       // geeft blauw
// 4c. Zorg ervoor dat je de tweede waarde uit bovenstaande array in de terminal logt       // geeft geel
// ==========================================

const color = ['groen', 'geel', 'rood', 'paars', 'blauw', 'oranje'];
console.log(color[4]);
console.log(color[1]);

// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25 en log dit in de terminal
// 5b. Overschrijf één van de items in de array dusdanig dat de cijferreeks netjes doorloopt (je mag de declaratie op de vorige regel niet aanpassen).
// 5c. Log de array in de terminal                                                          // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================

const numberOrder = [21, 22, 23, 25, 25]
numberOrder[3] = 24;
console.log(numberOrder);

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Overschrijf daarna de waarde bladerdeeg met lasagne bladen (je mag de declaratie op de vorige regel niet aanpassen).
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================

const ingredients = ['bladerdeeg', 'knoflook', 'spinazie'];
ingredients[0] = 'lasagna bladen';
console.log(ingredients);
console.log(ingredients.length);
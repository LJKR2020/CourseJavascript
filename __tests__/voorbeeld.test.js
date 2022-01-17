function add (a, b) {
    return a + b;
}

test("The add() function takes two numbers and sums them together", () => {
    // ARRANGE: klaarzetten van de waardes die we gaan testen, zodat we weten wat het resultaat zou moeten zijn.
    const number1 = 5;
    const number2 = 10;
    // ACT: Het aanroepen van de functie met de gecontroleerde data
    const sum = add(number1, number2);
    // ASSERT: een bewering maken over de uitkomst met expect functie.
    expect(sum).toBe(15);
})

function makePersonObject(firstname, age) {
    return {name: firstname, age: age}
}

test("The makePersonObject() function makes a object of a person with the assigned values", () => {
    //ARRANGE
    const personName = 'Piet';
    const personAge = 23;
    //ACT
    const personObject = makePersonObject(personName, personAge);
    //ASSERT
    expect(personObject).toEqual({name: 'Piet', age: 23})
    expect(personObject).toHaveProperty('name');
    expect(personObject).toHaveProperty('age');
    expect(personObject).not.toHaveProperty('profession')
})
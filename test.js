test("Adds 14 + 9 to equal 23", () => {
    const { sum } = require("./app.js");

    const result = sum(14, 9);
    const expect = 23;

    expect(result).toBe(3)
})

test("One euro should be 1.07 dollars", () => {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    const expect = 1.07;
    const result = fromEuroToDollar(1);

    expect(result).toBe(expect);
})

test("One USD to JPY equals to 149.03 JPY", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    const expect = 149.03;
    const result = fromDollarToYen(1);

    expect(result).toBe(expect);
})

test("One JPY to GBP to be 0.0072", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    const expect = 0.0072;
    const result = fromYenToPound(1);

    expect(result).toBe(expect);
})
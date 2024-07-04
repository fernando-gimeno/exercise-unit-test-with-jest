const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 149.03;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0072;
    return valueInPound; 
}

const sum = (num1, num2) => {
    return num1 + num2;
}

console.log("Run")

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
let piggyBank = {
    quarters: 4,
    nickels: 2,
    dimes: 5,
    pennies: 8
};

var quartersAmount = piggyBank.quarters * .25;
// console.log(quartersAmount);
var nickelsAmount = piggyBank.nickels * .05;
// console.log(nickelsAmount);
var dimesAmount = piggyBank.dimes * .1;
// console.log(dimesAmount);
var penniesAmount = piggyBank.pennies * .01;
// console.log(penniesAmount);

var dollarAmount = quartersAmount + nickelsAmount + dimesAmount + penniesAmount

console.log(`You have $${dollarAmount} in your piggy bank.`);
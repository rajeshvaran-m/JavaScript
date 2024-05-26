/* Write your code below. Good luck! 🙂 */

//Test Data 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

//Test Data 2
// const markWeight = 95;
// const markHeight = 1.88
// const johnWeight = 85;
// const johnHeight = 1.76;

const markBMI = markWeight / (markHeight * markHeight);
console.log(markBMI);

const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI
console.log('Does mark have higher BMI than John? : ' + markHigherBMI);
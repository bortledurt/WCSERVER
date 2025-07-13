const add, sub, mul, div = require('./calculation');

const hourlyRate = 300;
const hoursPerDay = 4;
const daysPerWeek = 6;

const grossIncome = hourlyRate * hoursPerDay * daysPerWeek;

const tax = grossIncome * 0.10;
const sss = 1200;
const pagibig = 300;
const phil = 400;
const deduction = tax + sss + pagibig + phil;
const netSalary = grossIncome - deduction

console.log("The Gross income is 7200");
console.log("Tax: ", tax);
console.log("SSS: ", sss);
console.log("Pag-Ibig fund: ", pagibig);
console.log("PhilHealth: ", phil);
console.log("Total deductions: ", deduction);
console.log("The net Salary is: ", netSalary);



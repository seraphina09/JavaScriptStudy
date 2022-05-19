let numObj = 5.123456;

console.log(numObj.toPrecision()); // logs 5.123456
console.log(numObj.toPrecision(5)); // logs 5.1235
console.log(numObj.toPrecision(2)); //logs 5.1
console.log(numObj.toPrecision(1)); // logs 5


numObj = 0.000123

console.log(numObj.toPrecision()); //log 0.000123
console.log(numObj.toPrecision(5));  // log 0.00012300
console.log(numObj.toPrecision(2)); //logs 0.00012
console.log(numObj.toPrecision(1)); // log 0.0001


//일부 상황에서는 지수 표기법 변동 있음
console.log((1234.5).toPrecision(2)); //logs 1.2e+3


console.log(123.456.toPrecision(3));
function myFunction(x, y) {
    var myVar = x * y;
    console.log(myVar);
    return myVar;
}

myFunction(7, 8);
var myResult = myFunction(5, 5);

// Excercise #1

function convert(celsius) {
    var result = celsius*3*5;
    console.log(result);
}

convert(5);

function convert1(fahrenheit) {
    var Result = (5/9)*(fahrenheit-32);
    console.log(Result);
}

convert1(70);

// Excercise #2

function ttlClasses(_months, _break, _sessions, _classes) {
   var total= _months * (_sessions*_classes)-(_break*_classes)
   console.log(total);
}

ttlClasses(6, 6, 12, 3);

// Excercise #3

function ttlPrice(price, quantity, tax, customs) {
   var ttl = quantity * price;
   var cusTax = (ttl * tax) + (ttl * customs);
   var calc = ttl + cusTax;
   //console.log(calc);
   return calc;
}

var calc = ttlPrice(899.95, 30, 0.18, 0.05);
alert(calc);

// Excercise 4

// var userInput = prompt("Enter a number");

function regCost(x) {
    var bhp = x;
    if (bhp <= 85) {
        return 3000;
    } if (bhp > 85) {
        return 5000;    
    } if (bhp > 150) {
        return 15000;
    }
}
var result = regCost(47);
console.log('Registration of this vehicle will cost ' + result);

// Homework

// 1?
// 2.

function calcTax(x) {
    var salary = x;
    var feeOne = 0.11;
    var feeTwo = 0.18;
    var Tax1 = salary * feeOne;
    var Tax2 = (salary - 1000) * feeTwo;
    var total = Tax1 + Tax2;
    if (salary <= 1000) {
        console.log(Tax1)
    } if (salary > 1000) {
        console.log(Tax2);
    }
}

calcTax(500);















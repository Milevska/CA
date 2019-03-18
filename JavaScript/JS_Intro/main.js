// simple exercises

var foot = 1
var meters = 0.3048
var result = foot = meters
console.log('One foot is ' + result +' meters')

var sideA = (15)
var sideB = (15)
var area = sideA * sideB
var result = area
console.log('Rectangle area is ' + area)

// less simple exercises

var classes = 3
var sessions = 12
var month = 6
var winterBreak = 6
var ttlClasses = month * (classes * sessions) - (classes * winterBreak)
var result = ttlClasses
console.log(result + ' classes for the whole academy year.')

// homework

var pi = 3.14
var radius = 3
var area = pi * (radius * radius)
var result = area
console.log("Circle area is " + area)

var q_ty = 30
var tax = 0.05
var customs = 0.18
var price = 899.95
var w_oTaxCustoms = price * q_ty
var taxCust = (w_oTaxCustoms * tax) + (w_oTaxCustoms * customs)
var total = w_oTaxCustoms + taxCust
var result = total
console.log('Ttl price is ' + total)
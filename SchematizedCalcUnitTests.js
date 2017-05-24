//Challenge - Write a small series of unit tests for each method

var addsOperation = function (actual, expected) {
  if(actual === expected) {
    console.log('Passed: adds operation: Got [' + actual + '], expected [' + expected + ']');
  } else {
    console.log('Failed: adds operation: Got [' + actual + '], expected [' + expected + ']');
  }
}

var conductsOperation = function(actual, expected) {
  if(actual[0] === expected[0] && actual[1] === expected[1]) {
    console.log('Passed: conducts operation: Got [' + actual + '], expected [' + expected +']');
  } else {
    console.log('Failed: conducts operation: Got [' + actual + '], expected [' + expected +']');
  }
}

var changesSchema = function (actual, expected) {
  if(actual === expected) {
    console.log('Passed: changed schema: Got [' + actual + '], expected [' + expected +']');
  } else {
    console.log('Failed: changed schema: Got [' + actual + '], expected [' + expected + ']');
  }
}


console.log('Add To Tests: \n');
console.log(addsOperation(schematizedCalc.addTo('hello world'), 'Failure'));
console.log(addsOperation(schematizedCalc.addTo({name: 'addition', args: 2, operation: function(a,b) {return a+b}}), 'Success!'));

console.log('\n');

console.log('Operate Tests: \n');
console.log(conductsOperation(schematizedCalc.operate('addition', 4, 5), ['Success!', 9]));
console.log(conductsOperation(schematizedCalc.operate('addition', -100, 5.6), ['Success!', -94.4]));

console.log('\n');

console.log('Change Schema: \n');
console.log(changesSchema(schematizedCalc.changeSchema('hello world'), 'Success!'));
console.log(changesSchema(schematizedCalc.changeSchema({name: 'Multiplicaion', args: 2, operation: function(a, b) {return a*b}}), 'Success!'));
var schematizedCalc = {

  operations: {
    addition: {
      name: 'addition',
      args: 2,
      operation: function(a,b) {
        var result;
        result = a+b;
        return result;
      }
    }
  },

  schema: {
    name: {
      type: 'string'
    },
    numArgs: {
      type: 'number'
    },
    operation: {
      type: 'function'
    }
  },

  operate: function(opStr, a, b, c, d) {
  var output = [];
  var message = '';
  var result;

  result = this.operations[opStr].operation(a, b, c, d);

  if (result === undefined) {
    message += 'Failure';
  } else {
    message += "Success!";
  }

  output.push(message, result);
  return output;
  }

};

var conductsOperation = function(actual, expected) {
  if(actual[0] === expected[0] && actual[1] === expected[1]) {
    console.log('Passed: conducts operation: Got [' + actual + '], expected [' + expected +']');
  } else {
    console.log('Failed: conducts operation: Got [' + actual + '], expected [' + expected +']');
  }
}

console.log(conductsOperation(schematizedCalc.operate('addition', 4, 5), ['Success!', 9]));
console.log(conductsOperation(schematizedCalc.operate('addition', -100, 5.6), ['Success!', -94.4]));

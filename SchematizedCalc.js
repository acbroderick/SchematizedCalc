//The final working project

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
    },

    subtraction: {
      name: 'subtraction',
      args: 2,
      operation: function(a,b) {
        var result;
        result = a-b;
        return result;
      }
    },

    multiplication: {
      name: 'multiplication',
      args: 2,
      operation: function(a,b) {
        var result;
        result = a*b;
        return result;
      }
    },

    division: {
      name: 'division',
      args: 2,
      operation: function(a,b) {
        var result;
        result = a/b;
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

  addTo: function(operationObj) {
  var message = '';
    if (typeof(operationObj.name) === this.schema.name.type && typeof(operationObj.args) === this.schema.numArgs.type && typeof(operationObj.operation) === this.schema.operation.type && Object.keys(operationObj).length === 3) {

      this.operations[operationObj.name] = operationObj;
      message += 'Success!';
    } else {
      message += "Failure"
    }
    return message;
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
  },


  changeSchema: function(newSchema) {
  var message = '';
  this.schema = newSchema;
    if(JSON.stringify(this.schema) === JSON.stringify(newSchema)) {
      message += 'Success!';
    } else {
      message += 'Failure';
    }
  return message;
  }

};

//Unit Tests

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

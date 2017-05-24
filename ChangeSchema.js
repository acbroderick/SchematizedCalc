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


var changesSchema = function (actual, expected) {
  if(actual === expected) {
    console.log('Passed: changed schema: Got [' + actual + '], expected [' + expected +']');
  } else {
    console.log('Failed: changed schema: Got [' + actual + '], expected [' + expected + ']');
  }
}

console.log(changesSchema(schematizedCalc.changeSchema('hello world'), 'Success!'));
console.log(changesSchema(schematizedCalc.changeSchema({name: 'Multiplicaion', args: 2, operation: function(a, b) {return a*b}}), 'Success!'));

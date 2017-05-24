var schematizedCalc = {

  operations: {},

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
  }

};


var addsOperation = function (actual, expected) {
  if(actual === expected) {
    console.log('Passed: adds operation: Got [' + actual + '], expected [' + expected + ']');
  } else {
    console.log('Failed: adds operation: Got [' + actual + '], expected [' + expected + ']');
  }
}


console.log(addsOperation(schematizedCalc.addTo('hello world'), 'Failure'));
console.log(addsOperation(schematizedCalc.addTo({name: 'addition', args: 2, operation: function(a,b) {return a+b}}), 'Success!'));

//An empty project that satisfies the prompt

var schematizedCalc = {
  operations: {}, //an object that contains operation objects
  schema: {}, //an object used for validating new operation objects

  addTo: function(operationObj) {
    var message = '';
    return message; //success or failure
  },
  operate: function(opStr, numArgs) {
    var output = [];
    var message = '';
    var result;

    output.push(message, result);
    return output; //success or failure, result of operation (undefined if failure)
  },
  changeSchema: function(newSchema) {
    var message = '';
    return message; //success or failure
  }
};
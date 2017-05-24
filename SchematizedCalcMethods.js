//A file containing each method's development in isolation of the others

var addTo = function(operationObj) {
  var message = '';

    if (typeof(operationObj.name) === this.schema.name.type && typeof(operationObj.args) === this.schema.numArgs.type && typeof(operationObj.operation) === this.schema.operation.type && Object.keys(operationObj).length === 3) {

      this.operations[operationObj.name] = operationObj;
      message += 'Success!';
    } else {
      message += "Failure"
    }
    return message;
}

var operate = function(opStr, numArgs) {
  var output = [];
  var message = '';
  var result;

  result = this.operations[opStr].operation(a, b);

  if (result === undefined) {
    message += 'Failure';
  } else {
    message += "Success!";
  }

  output.push(message, result);
  return output;
}

var changeSchema = function(newSchema) {
  var message = 'Success!';
  this.schema = newSchema;
  return message;
}
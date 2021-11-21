let greeting = (function() {
  let message = 'Hello';
  let getMessage = function() {
    return message;
  };
  // Closures
  return {
    getMessage: getMessage,
  };
  
})();

console.log(greeting.getMessage()); // Hello
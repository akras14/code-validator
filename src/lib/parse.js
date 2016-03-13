import * as esprima from 'esprima';

self.onmessage = function(e) {
  console.log('Message received from main script');
  var data = esprima.parse(e.data);
  console.log(data);
  console.log('Posting message back to main script');
  self.postMessage(['one', 2]);
};

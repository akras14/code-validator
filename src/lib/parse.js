import * as esprima from 'esprima';

self.onmessage = function(e) {
  try {
    var data = esprima.parse(e.data);
    self.postMessage([]);
  } catch(err){
    self.postMessage(['Unable to parse the code']);
  }
};

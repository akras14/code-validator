//Interface to communicate with a webworker
class Checker {
  constructor(){
    this.worker = new Worker('./build/parse.bundle.js');
  }

  check(data, callback){
    this.worker.postMessage(data);

    this.worker.onmessage = function(result) {
      callback(result.data);
    };
  }
}

var cheker = new Checker();

function checkData(data, callback){
  cheker.check(data, callback);
}

export default checkData;

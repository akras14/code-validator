class Checker {
  constructor(){
    if(window.Worker){
      this.worker = new Worker('./src/lib/parse.js');
    }
  }

  check(data, callback){
    console.log("In check");
    this.worker.postMessage(data);
    console.log("Posted message to web worker");

    this.worker.onmessage = function(result) {
      console.log(result.data);
      console.log('Message received from worker');
      callback(result.data);

    }
    return true;
  }
}
var cheker = new Checker();

function checkData(data, callback){
  cheker.check(data, callback);
}

export default checkData;

class Checker {
  constructor(){
    if(window.Worker){
      this.worker = new Worker('./src/lib/parse-webworker.js');
    }
  }

  check(){
    console.log("In check");
    this.worker.postMessage([1,2]);
    console.log("Posted message to web worker");

    this.worker.onmessage = function(e) {
      console.log(e.data);
      console.log('Message received from worker');
    }
    return true;
  }
}
var cheker = new Checker();

function checkData(){
  console.log("In checkData");
  cheker.check();
}

export default checkData;

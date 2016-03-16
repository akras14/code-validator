import React, {Component} from 'react';
import checkData from '../lib/check-data';

//Vanila debounce implementation
function debounce(callback, wait){
  let timeout;
  return function(store, newValue){
    if(timeout){
      clearTimeout(timeout);
    }
    timeout = setTimeout(function(){
      callback(store, newValue); //New fuctnion for IE8 Support
    }, wait);
  };
}

//Check for errors no more than every timeout
let debouncedErrorCheck = debounce((store, newValue) => {
  var state = store.getState();
  checkData({
    newValue,
    state
  }, function(errors){
    store.dispatch({
      type: 'TEXT_VALIDATION',
      errors: errors
    });
  });
}, 100);

//Provide Feedback on the source in the editor
class Feedback extends Component {
  render() {
    let { store } = this.context;
    var state = store.getState();

    debouncedErrorCheck(store, state.text);

    var feedback, errors = state.errors || [];
    if(errors.length > 0) {
      feedback = (
        <div>
          <h2>Errors Found</h2>
          <ul>
            { errors.map((error, index) => <li key={index}> { error } </li>) }
          </ul>
        </div>
      );
    } else {
      feedback = <h2>No Errors Found</h2>;
    }
    return feedback;
  }
}

Feedback.contextTypes = {
  store: React.PropTypes.object
};

export default Feedback;

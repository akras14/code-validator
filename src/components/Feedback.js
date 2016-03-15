import React, {Component} from 'react';

class Feedback extends Component {
  render() {
    let { store } = this.context;
    var state = store.getState();
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

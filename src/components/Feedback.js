import React, {Component, PropTypes} from 'react';

class Feedback extends Component {
  render() {
    var feedback, errors = this.props.errors;
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

Feedback.propTypes = {
  errors: PropTypes.array.isRequired
};

export default Feedback;

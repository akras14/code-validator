import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import checkData from '../lib/check-data';

class FakeAceEditor extends React.Component {
  onChange(event){
    this.props.onChange(event.target.value);
  }
  render() {
    return <textarea
      onChange = { this.onChange.bind(this) }
      rows = "10"
      cols="50"
      value={this.props.value}
    ></textarea>;
  }
}

FakeAceEditor.propTypes = {
  onChange: React.PropTypes.func,
  value: React.PropTypes.string
};

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

let debouncedOnChange = debounce((store, newValue) => {
  checkData(newValue, function(errors){
    store.dispatch({
      type: 'TEXT_VALIDATION',
      errors: errors
    });
  });
}, 200);

class Editor extends React.Component {

  onChange(newValue) {
    let { store } = this.context;
    store.dispatch({
      type: 'TEXT_UPDATE',
      text: newValue
    });
    debouncedOnChange(store, newValue);
  }

  render() {
    let { store } = this.context;
    let state = store.getState();
    //If IE8
    if(document.querySelectorAll('.lt-ie9').length){
      return(
        <FakeAceEditor
          onChange={this.onChange.bind(this)}
          value={state.text}
        />
      );
    } else {
      return (
        <AceEditor
          mode = "javascript"
          theme = "monokai"
          name = "code-editor"
          fontSize = {14}
          height = "500px"
          value = { state.text }
          onChange = {this.onChange.bind(this)}
        />
      );
    }
  }
}

Editor.contextTypes = {
  store: React.PropTypes.object
};

Editor.contextTypes = {
  store: React.PropTypes.object
};

export default Editor;

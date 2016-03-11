import React from 'react';
import { render } from 'react-dom';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

const defaultEditorValue = "//Please type your code here";

//If IE8
if(document.querySelectorAll('.lt-ie9').length){
  class FakeAceEditor extends React.Component {
    render() {
      return <textarea
        onChange = { ()=>{} } //TODO
        rows = "10"
        cols="50"
      ></textarea>;
    }
  }
  render(
    <FakeAceEditor/>,
    document.getElementById('root')
  );
} else {
  render(
    <AceEditor
      mode = "javascript"
      theme = "monokai"
      name = "code-editor"
      fontSize = {14}
      height = "500px"
      value = { defaultEditorValue }
    />,
    document.getElementById('root')
  );
}

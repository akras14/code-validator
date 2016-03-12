import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class FakeAceEditor extends React.Component {
  render() {
    return <textarea
      onChange = { ()=>{} } //TODO
      rows = "10"
      cols="50"
    ></textarea>;
  }
}

const defaultEditorValue = "//Please type your code here";

class Editor extends React.Component {
  render() {
    //If IE8
    if(document.querySelectorAll('.lt-ie9').length){
      return <FakeAceEditor/>;
    } else {
      return (
        <AceEditor
          mode = "javascript"
          theme = "monokai"
          name = "code-editor"
          fontSize = {14}
          height = "500px"
          value = { defaultEditorValue }
        />
      );
    }
  }
}

export default Editor;

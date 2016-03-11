import React from 'react';
import { render } from 'react-dom';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

const defaultEditorValue = "//Please type your code here";

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

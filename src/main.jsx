import React from 'react';
import { render } from 'react-dom';
import Editor from './components/Editor';
import Feedback from './components/Feedback';

var errors = [];

render(
  <div>
    <Editor/>
    <Feedback errors = { errors } />
  </div>,
  document.getElementById('root')
);

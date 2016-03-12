import React from 'react';
import { render } from 'react-dom';
import Editor from './components/Editor';
import Feedback from './components/Feedback';
import checkData from './lib/check-data';

var errors = [];

checkData();

render(
  <div>
    <Editor/>
    <Feedback errors = { errors } />
  </div>,
  document.getElementById('root')
);

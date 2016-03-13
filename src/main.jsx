import React from 'react';
import { render } from 'react-dom';
import Editor from './components/Editor';
import Feedback from './components/Feedback';
import checkData from './lib/check-data';

var errors = [];

var test = `
  var test = "some javascript code";
  if(test){
    console.log("Test exists");
  } else {
    console.log("Test does not exist");
  }
`;

checkData(test, function(errs){
  errors = errs;
  renderView();
});

function renderView(){
  render(
    <div>
      <Editor/>
      <Feedback errors = { errors } />
    </div>,
    document.getElementById('root')
  );
}

renderView();

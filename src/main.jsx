import React, { Component } from 'react';
import { render } from 'react-dom';
import Editor from './components/Editor';
import Feedback from './components/Feedback';
import TestConfig from './components/Test-Config';
import { createStore } from 'redux';
import config from './reducers/config.js';
import { Provider } from 'react-redux';

var errors = [];

const store = createStore(config);
store.subscribe(() => {
  renderView();
});

function renderView(){
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
}

class App extends Component {
  render(){
    return(
      <div>
        <TestConfig/>
        <Editor/>
        <Feedback errors = { errors } />
      </div>
    );
  }
}

renderView();

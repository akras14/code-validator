import React, {Component} from 'react';
import List from './list';
import Structure from './structure';

//TODO: Expand and/or move to a shared module
let supportedItems = [
  {
    name: 'Variable Declaration'
  },
  {
    name: 'For Loop'
  },
  {
    name: 'While Loop'
  },
  {
    name: 'If Statement'
  }
];

class TestConfig extends Component {
  render() {
    return (
      <div>
        <List type="Whitelist" items={supportedItems}/>
        <List type="Blacklist" items={supportedItems}/>
        <Structure items={supportedItems}/>
      </div>
    );
  }
}

export default TestConfig;

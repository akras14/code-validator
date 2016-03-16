import React, {Component} from 'react';
import List from './list';
import Structure from './structure';

class TestConfig extends Component {
  render() {

    let { store } = this.context;
    let state = store.getState();
    return (
      <div>
        <List type="Whitelist" items={state.whitelist}/>
        <List type="Blacklist" items={state.blacklist}/>
        <Structure
          items={state.structure}
          first={state.structure.first}
          second={state.structure.second}
        />
      </div>
    );
  }
}

TestConfig.contextTypes = {
  store: React.PropTypes.object
};

export default TestConfig;

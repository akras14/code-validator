import React, {Component} from 'react';

class Structure extends Component {
  update(source, event){
    let { store } = this.context;
    store.dispatch({
      type: 'CONFIG_UPDATE',
      value: event.target.value,
      source: source
    });
  }
  render(){
    let first = this.props.first;
    let second = this.props.second;
    let firstOptions = this.props.items.options[0];
    let secondOptions = this.props.items.options[1];

    let firstItems = firstOptions
      .map((item,index) => <option key={index} value={item.value}>{item.name}</option>);

    let secondItems = secondOptions
      .map((item,index) => <option key={index} value={item.value}>{item.name}</option>);

    return(
      <div>
        <select value={first} onChange={this.update.bind(this, 'first')}>
          <option value="none">select an option</option>
          {firstItems}
        </select>
        and inside of it
        <select value={second} onChange={this.update.bind(this, 'second')} disabled={this.props.first === "none"}>
          <option value="none">select an option</option>
          {secondItems}
        </select>
      </div>
    );
  }
}

Structure.propTypes = {
  items: React.PropTypes.object,
  onChange: React.PropTypes.func,
  first: React.PropTypes.string,
  second: React.PropTypes.string
};

Structure.contextTypes = {
  store: React.PropTypes.object
};

export default Structure;

import React, {Component} from 'react';

class List extends Component {
  render() {
    let { store } = this.context;
    let listItems = this.props.items.map((item, index) => {
      return (
        <span key={index} className="config-checkbox">
          <input
            type="checkbox"
            name={this.props.type}
            value={item.name}
            checked={item.checked}
            disabled={item.disabled}
            onChange={(event)=>{
              store.dispatch({
                type: this.props.type.toUpperCase() + '_UPDATE',
                key: index,
                checked: event.target.checked
              });
            }}
          />
          {item.name}
        </span>
      );
    });
    return (
      <div>
        <b>{this.props.type}:</b>
        {listItems}
      </div>
    );
  }
}

List.propTypes = {
  type: React.PropTypes.string,
  items: React.PropTypes.array
};

List.contextTypes = {
  store: React.PropTypes.object
};
export default List;

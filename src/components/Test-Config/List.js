import React, {Component} from 'react';

class List extends Component {
  render() {
    let listItems = this.props.items.map((item, index) => {
      return (
        <span key={index}>
          <input type="checkbox" name={this.props.type} value={item.name} />
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

export default List;

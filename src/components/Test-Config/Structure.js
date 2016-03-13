import React, {Component} from 'react';

class Structure extends Component {
  render(){
    let structureItems = this.props.items.map((item,index) => {
      return (
        <option key={index} value={item.name}>{item.name}</option>
      );
    });
    return(
      <select defaultValue="none" >
        <option value="none">select an option</option>
        {structureItems}
      </select>
    );
  }
}

Structure.propTypes = {
  items: React.PropTypes.array,
  onChange: React.PropTypes.func
};

export default Structure;

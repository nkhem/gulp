import React from 'react';

class DropdownItem extends React.Component {

  render() {
    return (
      <li onClick={this.props.handleItemClick(this.props.searchResultTitle)}>
        { this.props.searchResultTitle }
      </li>
    );
  }

}

export default DropdownItem;

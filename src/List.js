import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class List extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.label}>{item.label}</li>
        ))}
      </ul>
    );
  }
}

List.propTypes = {};

export default List;

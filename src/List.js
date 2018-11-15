import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Item = styled.li`
  color: #444;
`;

class List extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <Item key={item.label}>{item.label}</Item>
        ))}
      </ul>
    );
  }
}

List.propTypes = {};

export default List;

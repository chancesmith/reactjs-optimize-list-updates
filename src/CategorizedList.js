import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Item = styled.li`
  color: #444;
`;

class CategorizedList extends PureComponent {
  render() {
    return (
      <div>
        {this.props.categories.map(category => (
          <ul>
            <li key={this.props.catStrings[category]}>
              {this.props.catStrings[category]}
            </li>
            <ul>
              {this.props.items.map((item, index) =>
                item.category === category ? (
                  <div key={item.label + index}>
                    <Item>{item.label}</Item>
                  </div>
                ) : null
              )}
            </ul>
          </ul>
        ))}
      </div>
    );
  }
}

CategorizedList.propTypes = {};

export default CategorizedList;

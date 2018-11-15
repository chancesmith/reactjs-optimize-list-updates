import React, { PureComponent } from "react";
import PropTypes from "prop-types";

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
              {this.props.items.map(item =>
                item.category === category ? (
                  <li key={item.label}>{item.label}</li>
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

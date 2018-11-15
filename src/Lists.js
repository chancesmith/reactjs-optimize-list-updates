import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import List from "./List";
import CategorizedList from "./CategorizedList";

const CATEGORY = {
  PRODUCE: 0,
  FROZEN: 1,
  DAIRY: 2
};

const CATEGORY_STRINGS = ["PRODUCE", "FROZEN", "DAIRY"];

class Lists extends PureComponent {
  state = {
    categories: [0, 1, 2],
    items: [
      {
        label: "milk",
        category: CATEGORY.DAIRY,
        isSelected: false
      },
      {
        label: "cheese",
        category: CATEGORY.DAIRY,
        isSelected: false
      },
      {
        label: "creamer",
        category: CATEGORY.DAIRY,
        isSelected: false
      },
      {
        label: "oranges",
        category: CATEGORY.PRODUCE,
        isSelected: false
      },
      {
        label: "lemons",
        category: CATEGORY.PRODUCE,
        isSelected: false
      },
      {
        label: "pizza",
        category: CATEGORY.FROZEN,
        isSelected: false
      },
      {
        label: "green beans",
        category: CATEGORY.FROZEN,
        isSelected: false
      },
      {
        label: "ice cream",
        category: CATEGORY.FROZEN,
        isSelected: false
      },
      {
        label: "push-ups",
        category: CATEGORY.FROZEN,
        isSelected: false
      }
    ]
  };
  addApples = () => {
    const { items } = this.state;
    const apples = {
      label: "apples",
      category: CATEGORY.PRODUCE,
      isSelected: false
    };
    this.setState({ items: [...items, apples] });
  };
  removeApples = () => {
    const { items } = this.state;
    const newItems = items.filter(item => item.label !== "apples");
    this.setState({ items: newItems });
  };
  render() {
    const { items, categories } = this.state;
    return (
      <div>
        <button onClick={this.addApples}>add apples</button>
        <button onClick={this.removeApples}>remove apples</button>
        <div className="flex">
          <List items={items} />
          <CategorizedList
            items={items}
            categories={categories}
            catStrings={CATEGORY_STRINGS}
          />
        </div>
      </div>
    );
  }
}

Lists.propTypes = {};

export default Lists;

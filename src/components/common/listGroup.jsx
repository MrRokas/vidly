/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const listGroup = (props) => {
  const { listItems, textProperty, valueProperty, onSelect, selectedItem } =
    props;
  return (
    <div className="list-group">
      {listItems.map((item) => (
        <a
          onClick={() => onSelect(item)}
          key={item[valueProperty]}
          className={
            selectedItem === item
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
        >
          {item[textProperty]}
        </a>
      ))}
    </div>
  );
};

listGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default listGroup;

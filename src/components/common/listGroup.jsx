/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const listGroup = (props) => {
  const { listItems, onSelect, selectedItem, onReturnAll } = props;
  return (
    <div className="list-group">
      <a
        onClick={() => onReturnAll(null)}
        className={
          selectedItem === null
            ? "list-group-item list-group-item-action active"
            : "list-group-item list-group-item-action"
        }
      >
        {" "}
        All Genres
      </a>
      {listItems.map((item) => (
        <a
          onClick={() => onSelect(item.name)}
          key={item._id}
          className={
            selectedItem === item.name
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default listGroup;

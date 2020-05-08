import React from "react";
import "./Todo.css";

const Item = props => {
  const handleClick = e => {
    props.toggleItemCompleted(props.item.id);
  };

  return (
    <p
      onClick={handleClick}
      className={`item${props.item.completed ? " completed" : ""}`}>
    
      {props.item.task}
    </p>
  );
};

export default Item;
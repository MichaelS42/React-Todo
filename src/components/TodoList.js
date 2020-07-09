// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Item from "./Todo.js";

const TodoList = props => {
  return (

    <div className="to-do-list">

    <label htmlFor="search">Search by name </label>
    <input type="text" value={props.inputValue} onChange={props.petFilterOnChange}/>

      {props.tasks.map(item => (
        <Item
          toggleItemCompleted={props.toggleItemCompleted}
          key={item.id}
          item={item}
        />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  )
};

export default TodoList;

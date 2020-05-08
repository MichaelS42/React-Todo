import React from "react";
class TodoForm extends React.Component {
  
  
  render() {
    return (
      <form onSubmit={this.props.addNewItem}>
        <input
          type="text" task="item"
          value={this.props.newTask.task}
          onChange={this.props.handleChanges}
        />
        <button>Add Task</button>
      </form>
    );
  }
}
export default TodoForm;


import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      tasks : tasks,
      newTask: {
        task: '',
        id: Date.now(),
        completed: false
      }
    }
  }

  toggleItemCompleted = itemId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => {
        return !item.completed;
      })
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newTask.task) {
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask]
      })
     }
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      newTask: {...this.state.newTask, 
      task : e.target.value }
    })
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>TO DO List</h2>
          <TodoForm addNewItem={this.handleSubmit} newTask={this.state.newTask} handleChanges={this.handleChanges} />
        </div>
        <TodoList
          toggleItemCompleted={this.toggleItemCompleted}
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App
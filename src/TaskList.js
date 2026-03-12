import React, { Component } from "react";
import "./index.css";

class TaskList extends Component {
  static tasks = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
  ];

  constructor(props) {
    super(props);

    this.state = {
      update: false,
    };
  }

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);

    this.setState({
      update: !this.state.update,
    });
  };

  render() {
    return (
      <div className="task-container">
        <ul>
          {TaskList.tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => this.deleteTask(task.id)}>del</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;

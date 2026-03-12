import React, { Component } from "react";
import "./index.css";

class TaskList extends Component {
  // статичний список завдань
  static tasks = [
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Зробити домашнє завдання" },
    { id: 3, text: "Піти в зал" },
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
              <button onClick={() => this.deleteTask(task.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;

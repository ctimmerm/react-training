import React from "react";
import ReactDOM from "react-dom";

let idCounter = 0;

class TodoApp extends React.Component {
  state = {
    text: "",
    todos: [{ id: 0, text: "Write TODO list" }]
  };

  handleAddTodo = () => {
    idCounter++;
    const newTodo = {
      id: idCounter,
      text: this.state.text
    };
    this.setState({
      text: '',
      todos: [...this.state.todos, newTodo]
    });
  };

  handleInputChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  removeTodo = id => () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
              <button onClick={this.removeTodo(todo.id)}>
                x
              </button>
            </li>)}
        </ul>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));

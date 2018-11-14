import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    // increase the counter by one
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleReset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.handleClick}>Click Me</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));

module.hot.accept();

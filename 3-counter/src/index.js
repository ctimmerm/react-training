import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  render() {
    return (
      <div>
        0
        <button>Click Me</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));

module.hot.accept();

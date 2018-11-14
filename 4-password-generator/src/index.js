import React from "react";
import ReactDOM from "react-dom";

import generatePassword from "./generate_password";

class PasswordGenerator extends React.Component {
  state = {
    length: 15,
    password: generatePassword(15)
  };

  handleChange = event => {
    const value = parseInt(event.target.value);
    this.setState({
      length: value,
      password: generatePassword(value)
    });
  };

  render() {
    return (
      <div>
        <input
          type="range"
          min="5"
          max="40"
          value={this.state.length}
          onChange={this.handleChange}
        />
        <input type="readonly" value={this.state.password} />
      </div>
    );
  }
}

ReactDOM.render(<PasswordGenerator />, document.getElementById("root"));

module.hot.accept();

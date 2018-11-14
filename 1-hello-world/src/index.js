import React from "react";
import ReactDOM from "react-dom";

/*

Tasks:

1. Display "Hello World"
2. Pass a "name" prop to the HelloWorld component
(3. Display the current time)

 */

class HelloWorld extends React.Component {
  state = {
    now: new Date()
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        Hello World, {this.props.name}.
        It's {this.state.now.toLocaleString()} now.
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld name="Name" />, document.getElementById("root"));

module.hot.accept();

import React from "react";
import ReactDOM from "react-dom";

import Color from "./color";
import { colors } from "./colors";

// TODO: Render list of colors with their names
// 1. import colors from colors.js
// 2. map array of colors to React elements in the render method
//    colors.map(color => <div>...</div>);

class Colors extends React.Component {
  render() {
    return (
      <ul>
        {this.props.colors.map(color => (
          <Color key={color.name + color.hex} color={color} />
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<Colors colors={colors} />, document.getElementById("root"));

module.hot.accept();

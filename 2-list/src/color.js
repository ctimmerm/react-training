import React from "react";

export default class Color extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <li>
        <div
          style={{
            display: 'inline-block',
            borderRadius: "50%",
            backgroundColor: color.hex,
            height: 50,
            width: 50
          }}
        />
        <span>{color.name}</span>
      </li>
    );
  }
}

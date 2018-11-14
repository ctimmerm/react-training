import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// TODO
// 1. Install and import axios
// 2. Make the request in componentDidMount (GET /colors)
// 3. Store the result of the request in component state
// 4. Render the result from component state
// 5. Show a "Loading" message when a request has been made but no
//    response has been received yet. Use a state variable for this.

class ServerRequest extends React.Component {
  state = {
    colors: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios.get("/colors").then(response => {
      this.setState({
        colors: response.data.colors,
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading data...</div>;
    }

    return (
      <>
        {this.state.colors.map(color => (
          <div
            key={color.name + color.hex}
            style={{
              padding: 8,
              fontSize: 28,
              fontWeight: 700,
              color: "#fff",
              backgroundColor: color.hex
            }}
          >
            {color.name}
          </div>
        ))}
      </>
    );
  }
}

ReactDOM.render(<ServerRequest />, document.getElementById("root"));

import React, { Component } from "react";
import Button from "./Button";

class Anything extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Button
          label="MYLABEL"
          //   fire={() =>
          //     this.setState({
          //       counter: this.state.counter + 1
          //     })
          //   }
        />
      </div>
    );
  }
}

export default Anything;

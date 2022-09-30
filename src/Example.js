import React from "react";

class Example extends React.Component {
  render() {
    return (
      <div>
        <h2>Example</h2>
        <p>Hello, {this.props.name}!</p>
        <p>Age: {this.props.age}.</p>
      </div>
    );
  }
}

export default Example;

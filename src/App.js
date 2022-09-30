import React from "react";
import Example from "./Example";

//----------------------- task 1

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Stepan",
//       age: 25,
//     };
//   }
//
//   handleChange = () => {
//     this.setState({ name: "Mykola", age: 30 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>App Component</h1>
//         <Example name={this.state.name} age={this.state.age} />
//         <button onClick={this.handleChange}>Change name</button>
//       </div>
//     );
//   }
// }

// -------------------------- task 2

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Stepan",
//       age: 25,
//       isShow: false,
//     };
//   }

//   handleChange = () => {
//     this.setState({ isShow: !this.state.isShow });
//   };

//   render() {
//     return (
//       <div>
//         <h1>App Component</h1>
//         {this.state.isShow ? (
//           <Example name={this.state.name} age={this.state.age} />
//         ) : null}
//         <button onClick={this.handleChange}>Click me</button>
//       </div>
//     );
//   }
// }

//----------------------------task 3

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Stepan",
      age: 25,
      isShow: false,
      btnName: "Show",
    };
  }

  handleChange = () => {
    this.setState({
      isShow: !this.state.isShow,
      btnName: this.state.btnName === "Show" ? "Hide" : "Show",
    });
  };

  render() {
    return (
      <div>
        <h1>App Component</h1>
        {this.state.isShow ? (
          <Example name={this.state.name} age={this.state.age} />
        ) : null}
        <button onClick={this.handleChange}>{this.state.btnName}</button>
      </div>
    );
  }
}

export default App;

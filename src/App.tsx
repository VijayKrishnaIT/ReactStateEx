//createRef() function used to access the data from DOM Elements  Ex. Input, Div, Buttons
import React, { Component, createRef } from "react";
import Demo from "./Demo";

class App extends React.Component<{}, Demo> {
  private uname = createRef<HTMLInputElement>();
  private upwd = createRef<HTMLInputElement>();

  state: Demo = {
    login: "",
  };

  login = () => {
    if (
      this.uname.current?.value === "admin" &&
      this.upwd.current?.value === "admin"
    ) {
      this.setState({ login: "success" });
    } else {
      this.setState({ login: "Fail" });
    }
  };
  render() {
    return (
      <div>
        <fieldset>
          <legend>Login</legend>
          <input
            type="text"
            ref={this.uname}
            placeholder="Enter User Name"
          ></input>
          <br></br>
          <br></br>
          <input
            type="password"
            ref={this.upwd}
            placeholder="Enter Password"
          ></input>
          <br></br>
          <br></br>
          <button onClick={this.login}>Login</button>
          <h5>{this.state.login}</h5>
        </fieldset>
      </div>
    );
  }
}

export default App;

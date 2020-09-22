import React, { Component } from "react";
import SubChild from "./SubChild";

interface ChildData {
  my_products: any[];
}

class Child extends React.Component<ChildData> {
  constructor(props: ChildData) {
    super(props);
  }
  render() {
    return (
      <div>
        <SubChild {...this.props}></SubChild>
      </div>
    );
  }
}

export default Child;

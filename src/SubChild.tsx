import React, { Component } from "react";
import SubChildProps from "./SubChildProps";

class SubChild extends React.Component<SubChildProps> {
  constructor(props: SubChildProps) {
    super(props);
  }
  render() {
    return <div>{JSON.stringify(this.props.my_products)}</div>;
  }
}
export default SubChild;

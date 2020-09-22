import React, { Component } from "react";
import ParentState from "./ParentState";
import Child from "./Child";
class Parent extends React.Component<{}, ParentState> {
  state: ParentState = {
    products: [
      { p_id: 111, p_name: "p_one", p_cost: 10000 },
      { p_id: 222, p_name: "p_two", p_cost: 20000 },
      { p_id: 333, p_name: "p_three", p_cost: 30000 },
      { p_id: 444, p_name: "p_four", p_cost: 40000 },
      { p_id: 555, p_name: "p_five", p_cost: 50000 },
    ],
  };
  render() {
    return (
      <div>
        <Child my_products={this.state.products} />
      </div>
    );
  }
}
export default Parent;

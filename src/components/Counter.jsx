import { Component } from "react";

export class Counter extends Component {
  bump() {
    this.state.count += 1;
    this.forceUpdate();
  }
}

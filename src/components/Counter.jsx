import { Component } from "react";

export class Counter extends Component {
  bump() {
    this.setState({ count: this.state.count + 1 });
  }
}

import React, { Component } from "react";
import Counters from "./counters";
import NavBar from "./navbar";
class app extends Component {
  state = {
    counters: [
      { id: 1, count: 3 },
      { id: 2, count: 2 },
      { id: 3, count: 1 },
      { id: 4, count: 0 },
      { id: 5, count: 4 },
    ],
  };
  handleDelete = (countr_id) => {
    //console.log("event handler called", countr_id);

    let new_counters = this.state.counters.filter(
      (element) => countr_id !== element.id
    );
    this.setState({ counters: new_counters });
  };
  handleReset = () => {
    /* console.log("Reset Clicked!"); */
    const new_state = this.state.counters.map((e) => {
      e.count = 0;
      return e;
    });
    /* console.log("new_state", new_state); */
    this.setState({ counters: new_state });
  };
  handleIncreament = (countr_id) => {
    let res = this.state.counters.map((element) => {
      if (element.id === countr_id) {
        element.count = element.count + 1;
      }
      return element;
    });
    this.setState({ counters: res });
  };
  handleDecreament = (countr_id) => {
    let res = this.state.counters.map((element) => {
      if (element.id === countr_id) {
        element.count = element.count - 1;
      }
      return element;
    });
    this.setState({ counters: res });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar data={this.state.counters} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncreament={this.handleIncreament}
            onDecreament={this.handleDecreament}
            onReset={this.handleReset}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default app;

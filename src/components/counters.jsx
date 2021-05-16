import React, { Component } from "react";
import Counter from "./counter.jsx";

class counters extends Component {
  render() {
    return <React.Fragment>{this.renderCounters()}</React.Fragment>;
  }
  renderCounters() {
    return (
      <div>
        <button className="btn btn-primary sm m-2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((element) => (
          <Counter
            key={element.id}
            counter={element}
            onDelete={this.props.onDelete}
            onIncreament={this.props.onIncreament}
            onDecreament={this.props.onDecreament}
          >
            <span>#{element.id}</span>
            <h5>#{element.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default counters;

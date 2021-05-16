import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 15,
  };
  render() {
    //console.log("Trace this.props", this.props);
    return (
      <React.Fragment>
        <div>
          {this.props.children[0]}
          <span style={this.styles} className={this.getBadgeClass()}>
            {this.formatCount()}
          </span>
          {/* this.renderTag() */}
          <button
            className="btn btn-success sm m-2"
            onClick={() => this.props.onIncreament(this.props.counter.id)}
          >
            Increament
          </button>
          <button
            className="btn btn-primary sm m-2"
            onClick={() => this.props.onDecreament(this.props.counter.id)}
          >
            Decreament
          </button>
          <button
            className="btn btn-danger sm m2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let counterBadgeClass = "btn sm m-2 btn-";
    counterBadgeClass += this.props.counter.count === 0 ? "warning" : "primary";
    return counterBadgeClass;
  }

  formatCount() {
    /* console.log("Trace this.props.count", this.props.counter.count);
    let { value } = this.props.counter.count; */
    let { count } = this.props.counter;
    return count === 0 ? "Zero" : count;
    //return this.props.counter.count;
  }
}

export default Counter;

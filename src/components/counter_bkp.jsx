import React, { Component } from "react";

class Counter extends Component {
  state = {
    id: this.props.counter.id,
    value: this.props.counter.count,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
  };
  styles = {
    fontSize: 15,
  };
  /* constructor() {
    super();
    console.log("Im in constructor", this.state.value);
    this.handleIncreament = this.handleIncreament.bind(this);
  } */
  handleIncreament = (product_id) => {
    console.log("product_id", product_id);

    console.log("Button clicked!", this.state.value);
    this.setState({ value: this.state.value + 1 });
  };
  handleDecreament = (product_id) => {
    console.log("product_id", product_id);
    console.log("Button clicked!", this.state.value);
    this.setState({ value: this.state.value - 1 });
  };
  /*  handleParameterisedFunction = () => {
        this.handleIncreament({ product_id: 1 });
   }; */

  render() {
    console.log("this.props.counter", this.props.counter);
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
            onClick={() => {
              this.handleIncreament({ product_id: 123456 });
            }}
          >
            Increament
          </button>
          <button
            className="btn btn-primary sm m-2"
            onClick={() => {
              this.handleDecreament({ product_id: 123456 });
            }}
          >
            Decreament
          </button>
          <button
            className="btn btn-danger sm m2"
            /* onClick={
              (this.props.onDelete = () => {
                id: this.state.id;
              })
              
            } */
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
  renderTag() {
    if (this.state.tags.length === 0)
      return <p>Please add tags, No tags available!</p>;

    return (
      <ul>
        {this.state.tags.map((tag, index) => (
          <li id={index} key={index}>
            tag
          </li>
        ))}
      </ul>
    );
  }
  getBadgeClass() {
    let counterBadgeClass = "btn sm m-2 btn-";
    counterBadgeClass += this.state.value === 0 ? "warning" : "primary";
    return counterBadgeClass;
  }

  formatCount() {
    let { value } = this.state;
    return value === 0 ? "Zero" : value;
    /* if (this.state.value === 0) {
      return (
        <h6>
          <span className="badge badge-primary">Zero</span>
        </h6>
      );
    } else {
      return this.state.value;
    } */
  }
}

export default Counter;

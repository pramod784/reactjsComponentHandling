import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav id="navbar-example2" className="navbar navbar-light bg-light">
        <div>
          <table>
            <tr>
              <th>No of items : </th>
              <td>{this.props.data.length} </td>
            </tr>
            <tr>
              <th>Sum of items : </th>
              <td>
                {this.props.data.reduce(function (a, b) {
                  console.log("inside reduce", b);
                  return a + b.count;
                }, 0)}
              </td>
            </tr>
          </table>
        </div>
      </nav>
    );
  }
}
export default NavBar;

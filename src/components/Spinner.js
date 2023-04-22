import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        ></div>
      </div>
    );
  }
}

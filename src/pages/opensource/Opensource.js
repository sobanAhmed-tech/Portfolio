import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Opensource extends Component {
  render() {
    return <Redirect to="/projects" />;
  }
}

export default Opensource;

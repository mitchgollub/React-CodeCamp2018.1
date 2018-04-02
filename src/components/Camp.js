import React from "react";

import "./Camp.css";

class Camp extends React.Component {
  constructor() {
    super();
    this.state = {
      slogan: "philly.NET Code Camp 2018.1"
    };
  }
  render() {
    return (
      <section>
        <h1>{this.state.slogan}</h1>
      </section>
    );
  }
}

export default Camp;

import React, { Component } from "react";
import { connect } from "react-redux";

import "./Speaker.css";

class Speaker extends Component {
  render() {
    return (
      <section className="speaker">
        <ul>
          {this.props.speakers.map(speaker => (
            <li key={speaker.id}>
              <div>{speaker.fullName}</div>
              <div>{speaker.tagLine}</div>
              <div>{speaker.sessions.length}</div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    speakers: state.speakers
  };
}

export default connect(mapStateToProps)(Speaker);

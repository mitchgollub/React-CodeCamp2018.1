import React, { Component } from "react";
import { connect } from "react-redux";

import "./Session.css";

class Session extends Component {
  render() {
    return (
      <section className="session">
        <ul>
          {this.props.sessions.map(session => (
            <li key={session.id}>
              <div>{session.title}</div>
              <div>{session.speakers[0].name}</div>
              <div>{session.room}</div>
              <div>{session.startsAt.substring(11, 16)}</div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    sessions: state.sessions
  };
}

export default connect(mapStateToProps)(Session);

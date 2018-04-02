import React, { Component } from "react";
import { connect } from "react-redux";

import "./Schedule.css";

class Schedule extends Component {
  render() {
    return (
      <section className="schedule">
        <ul>
          {this.props.schedules.map(schedule => (
            <li key={schedule.date}>
              <h2>{schedule.date.substring(5, 10)}</h2>
              <ul>
                {schedule.rooms.map(room => (
                  <li key={room.id}>
                    <div class="room">{room.name}</div>
                    <ul>
                      {room.sessions.map(session => (
                        <li key={session.id}>
                          <div class="title">{session.title}</div>
                          <div class="speaker">{session.speakers[0].name}</div>
                          <div class="time">
                            {session.startsAt.substring(11, 16)}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    schedules: state.schedules
  };
}

export default connect(mapStateToProps)(Schedule);

import React, { Component } from "react";
import { connect } from "react-redux";

import "./Sponsor.css";

class Sponsor extends Component {
  render() {
    return (
      <section className="sponsor">
        <h2>Platinum</h2>
        <ul>
          {this.props.sponsors
            .filter(sponsor => sponsor.level === "platinum")
            .map(sponsor => (
              <li key={sponsor.id}>
                <img src={sponsor.logo} alt={sponsor.name} />
              </li>
            ))}
        </ul>
        <h2>Gold</h2>
        <ul>
          {this.props.sponsors
            .filter(sponsor => sponsor.level === "gold")
            .map(sponsor => (
              <li key={sponsor.id}>
                <img src={sponsor.logo} alt={sponsor.name} />
              </li>
            ))}
        </ul>
        <h2>Bronze</h2>
        <ul>
          {this.props.sponsors
            .filter(sponsor => sponsor.level === "bronze")
            .map(sponsor => (
              <li key={sponsor.id}>
                <img src={sponsor.logo} alt={sponsor.name} />
              </li>
            ))}
        </ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    sponsors: state.sponsors
  };
}

export default connect(mapStateToProps)(Sponsor);

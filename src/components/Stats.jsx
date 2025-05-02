import { Component } from "react";

class Stats extends Component {
  render() {
    return (
      <div className="stats">
        <h2>Stats</h2>
        <p className="goodS">Good: {this.props.good}</p>
        <p className="neutralS">Neutral: {this.props.neutral}</p>
        <p className="neutralS">Bad: {this.props.bad}</p>
      </div>
    );
  }
}

export default Stats;

import { Component } from "react";

class Stats extends Component {
  render() {
    if (this.props.total > 0) {
      return (
        <div className="stats">
          <h2>Stats</h2>
          <p className="goodS">Good: {this.props.good}</p>
          <p className="neutralS">Neutral: {this.props.neutral}</p>
          <p className="neutralS">Bad: {this.props.bad}</p>
          <p className="total">Total: {this.props.total}</p>
          <p className="pp">
            Positive percent:{" "}
            {this.props.total > 0
              ? Math.round((this.props.good / this.props.total) * 100)
              : 0}
            %
          </p>
        </div>
      );
    }
  }
}

export default Stats;

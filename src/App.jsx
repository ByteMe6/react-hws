import { Component } from "react";
import Stats from "./components/Stats";
import Rev from "./components/Rev";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    return (
      <main className="main">
        <Rev onFeedback={this.onFeedback} />
        <Stats 
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={Number(this.state.good) + Number(this.state.neutral) + Number(this.state.bad)}
        />
      </main>
    );
  }
}

export default App;

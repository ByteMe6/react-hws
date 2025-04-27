import React, { Component } from "react";
import user from "./components/user.json";
import Profile from "./components/Profile";
import data from "./components/data.json";
import Statistics from "./components/Statistics";

class App extends Component {
  render() {
    return (
      <main className="main">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        /><br/>
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </main>
    );
  }
}

export default App;

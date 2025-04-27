import React, { Component } from "react";
import user from "./components/user.json";
import Profile from "./components/Profile";


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
        />
      </main>
    );
  }
}

export default App;

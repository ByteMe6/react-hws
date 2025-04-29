import React, { Component } from "react";
import user from "./components/user.json";
import Profile from "./components/Profile";
import data from "./components/data.json";
import Statistics from "./components/Statistics";
import Friends from './components/Friends/Friends';
import Transactions from "./components/Transactions/Transactions";



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

        <Friends/>
        <Transactions />
      </main>
    );
  }
}

export default App;

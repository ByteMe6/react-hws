import React, { Component } from "react";
import arr from "./recepies.json" // мне это нейронка с фото достала
import Dish from "./components/Dish";

class App extends Component {
  state = {};
  render() {
    return <main className="main">
      <Dish arr={arr}/>
    </main>;
  }
}

export default App;

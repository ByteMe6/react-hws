import { Component } from "react";
import arr from "./upcoming-events.json"
import EventsRender from "./components/ER";

class App extends Component {
  render() { 
    return <main className="main">
      <EventsRender arr={arr}/>
    </main>;
  }
}
 
export default App;
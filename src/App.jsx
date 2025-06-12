import { Component } from "react";
import Searchbar from "./components/Searchbar";
import Images from "./components/Images";

class App extends Component {
  state = {
    searchbarVal: '',
  };

  handleSearch = (value) => {
    console.log(value + ' - это значаение в файлике App.jsx');
    this.setState({ searchbarVal: value });
  };

  render() {
    return (
      <main>
        <Searchbar onSearch={this.handleSearch} />
        <Images query={this.state.searchbarVal} />
      </main>
    );
  }
}

export default App;
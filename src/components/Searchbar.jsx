import { Component } from "react";

class Searchbar extends Component {
  state = {
    searchbarVal: '',
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ searchbarVal: value });
    console.log(value + ' - это значаение в файлике Searchbar.jsx');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchbarVal);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Поиск..." 
          value={this.state.searchbarVal} 
          onChange={this.handleInputChange}
        />
        <button type="submit">Найти</button>
      </form>
    );
  }
}

export default Searchbar;
import { Component } from "react";
import { fetchGifs } from "./components/ApiRequest";
import Form from "./components/Form";
import Pagination from "./components/Pagination";
import GifCard from "./components/GifCard";
import './App.css';

class App extends Component {
  state = {
    gifs: [],
    error: null,
    keyword: " ",
    isLoading: false,
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const apiKey = import.meta.env.VITE_ApiKey;
    const gifs = await fetchGifs(apiKey, this.state.keyword);
    // Добавляем задержку в 1 секунду
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (typeof gifs === 'string') { 
      this.setState({ error: gifs, isLoading: false });
    } else {
      this.setState({ 
        gifs, 
        isLoading: false,
        totalPages: Math.ceil(gifs.length / this.state.itemsPerPage)
      });
    }
  }

  takeValue = async (newValue) => {
    this.setState({ keyword: newValue, isLoading: true, currentPage: 1 }, async () => {
      const apiKey = import.meta.env.VITE_ApiKey;
      const gifs = await fetchGifs(apiKey, newValue);
      // Добавляем задержку в 1 секунду
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (typeof gifs === 'string') {
        this.setState({ error: gifs, isLoading: false });
      } else {
        this.setState({ 
          gifs, 
          isLoading: false,
          totalPages: Math.ceil(gifs.length / this.state.itemsPerPage)
        });
      }
    });
  }

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage });
  }

  render() {
    const { gifs, currentPage, itemsPerPage, totalPages } = this.state;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentGifs = gifs.slice(startIndex, endIndex);

    return (
      <main className="main">
        <Form takeV={this.takeValue} />
        
        <div className="gifs-container">
          {this.state.isLoading ? (
            <div className="loading">
              <h2>Загрузка...</h2>
            </div>
          ) : this.state.error ? (
            <div className="error-message">
              {this.state.error}
            </div>
          ) : (
            Array.isArray(gifs) && gifs.length > 0 ? (
              <>
                <div className="gifs-grid">
                  {currentGifs.map(gif => (
                    <GifCard key={gif.id} gif={gif} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange}
                />
              </>
            ) : (
              <div className="no-results">
                Ничего не найдено
              </div>
            )
          )}
        </div>
      </main>
    );
  }
}
export default App;
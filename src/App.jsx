import { Component } from "react";
import { fetchGifs } from "./components/ApiRequest";
import Form from "./components/Form";

class App extends Component {
  state = {
    gifs: [],
    error: null,
    keyword: " ",
    isLoading: false
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
      this.setState({ gifs, isLoading: false });
    }
  }

  takeValue = async (newValue) => {
    this.setState({ keyword: newValue, isLoading: true }, async () => {
      const apiKey = import.meta.env.VITE_ApiKey;
      const gifs = await fetchGifs(apiKey, newValue);
      // Добавляем задержку в 1 секунду
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (typeof gifs === 'string') {
        this.setState({ error: gifs, isLoading: false });
      } else {
        this.setState({ gifs, isLoading: false });
      }
    });
  }

  render() {
    return (
      <main className="main">
        <div className="gifs">
          {this.state.isLoading ? (
            <div className="loading">
              <h2>Загрузка...</h2>
            </div>
          ) : this.state.error ? (
            <h2>{this.state.error}</h2>
          ) : (
            Array.isArray(this.state.gifs) && this.state.gifs.length > 0 ? (
              this.state.gifs.map(gif => (
                <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
              ))
            ) : (
              <h2>Nothing</h2>
            )
          )}
        </div>
        <Form takeV={this.takeValue}></Form>
      </main>
    );
  }
}
export default App;
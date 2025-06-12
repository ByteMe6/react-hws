import React, { Component } from "react";
import Pagination from "./Pagination";

class Images extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
    totalHits: 0,
  };

  componentDidMount() {
    const { query } = this.props;
    if (query) {
      this.setState({ loading: true, error: null });
      this.fetchImages(query, this.state.page);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const queryChanged = prevProps.query !== this.props.query;
    const pageChanged = prevState.page !== this.state.page;

    if ((queryChanged && this.props.query) || (pageChanged && this.props.query)) {
      this.setState({ loading: true, error: null }, () => {
        this.fetchImages(this.props.query, this.state.page);
      });
    }
  }

  fetchImages = async (query, page) => {
    const apiKey = "46720151-df3e0447f69496992d48f69c6";
    const url = `https://pixabay.com/api/?q=${encodeURIComponent(
      query
    )}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      this.setState({
        images: data.hits,
        totalHits: data.totalHits,
        loading: false,
      });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  handlePageChange = (newPage) => {
    this.setState({ page: newPage });
  };

  render() {
    const { images, loading, error, page, totalHits } = this.state;
    const { query } = this.props;
    const totalPages = Math.ceil(totalHits / 12);

    if (!query) {
      return <div>Введіть запит для пошуку зображень</div>;
    }

    if (loading) {
      return <div>Завантаження...</div>;
    }

    if (error) {
      return <div>Помилка: {error}</div>;
    }

    if (images.length === 0) {
      return <div>Зображення за запитом "{query}" не знайдено</div>;
    }

    return (
      <div>
        <ul className="gallery">
          {images.map((image) => (
            <li key={image.id} className="gallery-item">
              <img src={image.webformatURL} alt={image.tags} />
            </li>
          ))}
        </ul>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Images;
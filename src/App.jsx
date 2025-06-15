import { useState, useEffect } from "react";
import { fetchGifs } from "./components/ApiRequest";
import Form from "./components/Form";
import Pagination from "./components/Pagination";
import GifCard from "./components/GifCard";
import Modal from "./components/Modal";
import './App.css';

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedGif, setSelectedGif] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadInitialGifs = async () => {
      setIsLoading(true);
      const apiKey = import.meta.env.VITE_ApiKey;
      const fetchedGifs = await fetchGifs(apiKey, keyword);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (typeof fetchedGifs === 'string') {
        setError(fetchedGifs);
      } else {
        setGifs(fetchedGifs);
        setTotalPages(Math.ceil(fetchedGifs.length / itemsPerPage));
      }
      setIsLoading(false);
    };

    loadInitialGifs();
  }, []);

  const takeValue = async (newValue) => {
    setKeyword(newValue);
    setIsLoading(true);
    setCurrentPage(1);
    
    const apiKey = import.meta.env.VITE_ApiKey;
    const fetchedGifs = await fetchGifs(apiKey, newValue);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (typeof fetchedGifs === 'string') {
      setError(fetchedGifs);
    } else {
      setGifs(fetchedGifs);
      setTotalPages(Math.ceil(fetchedGifs.length / itemsPerPage));
    }
    setIsLoading(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleGifClick = (gif) => {
    setSelectedGif(gif);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGif(null);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGifs = gifs.slice(startIndex, endIndex);

  return (
    <main className="main">
      <Form takeV={takeValue} />
      
      <div className="gifs-container">
        {isLoading ? (
          <div className="loading">
            <h2>Загрузка...</h2>
          </div>
        ) : error ? (
          <div className="error-message">
            {error}
          </div>
        ) : (
          Array.isArray(gifs) && gifs.length > 0 ? (
            <>
              <div className="gifs-grid">
                {currentGifs.map(gif => (
                  <GifCard 
                    key={gif.id} 
                    gif={gif} 
                    onGifClick={handleGifClick}
                  />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <div className="no-results">
              Ничего не найдено
            </div>
          )
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        gif={selectedGif}
      />
    </main>
  );
};

export default App;
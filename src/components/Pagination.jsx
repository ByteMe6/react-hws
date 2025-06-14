import { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
    render() {
        const { currentPage, totalPages, onPageChange } = this.props;
        const maxPages = 10;
        const displayTotalPages = Math.min(totalPages, maxPages);
        const totalGifs = displayTotalPages * 10; // 10 гифок на странице

        return (
            <div className="pagination">
                <button 
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-button"
                >
                    Предыдущая
                </button>
                
                <span className="page-info">
                    Страница {currentPage} из {displayTotalPages}
                    <span className="total-gifs">({totalGifs} гифок)</span>
                </span>

                <button 
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === displayTotalPages}
                    className="pagination-button"
                >
                    Следующая
                </button>
            </div>
        );
    }
}

export default Pagination;

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Назад
      </button>
      <span>
        Сторінка {currentPage} з {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Вперед
      </button>
    </div>
  );
};

export default Pagination;
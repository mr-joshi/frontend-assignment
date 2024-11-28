import React from 'react';
import './paginationFooter.css';

const PaginationFooter = ({ totalPages = 0, currentPage = 0, handlePageChange }) => {
  const pages=5;
  const pageStart = Math.max(1, currentPage - Math.floor(pages / 2));
  const pageEnd = Math.min(totalPages, pageStart + pages - 1);

  const pageNumbers = Array.from({ length: pageEnd - pageStart + 1 }, (_, i) => pageStart + i);

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <div className="pagination-container">
      <button onClick={handlePrevClick} disabled={currentPage <= 1}>
        Prev
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextClick} disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default PaginationFooter;

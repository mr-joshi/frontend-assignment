import { useState } from 'react';
import PaginationFooter from '../PaginationFooter/PaginationFooter';
import './table.css';

export const Table = ({ data = [] }) => {
  const getPageFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get('page'), 10);
    return isNaN(page) ? 1 : page;
  };

  const [currentPage, setCurrentPage] = useState(getPageFromUrl());
  
  const recordsPerPage = 5;
  const totalRecords = data.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = data.slice(startIndex, startIndex + recordsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `?page=${page}`);
  };



  return (
    <div className="table-container">
      <div className='table-wrapper'>
      <table className="styled-table-main">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((project, index) => (
            <tr key={index}>
              <td>{project['s.no']}</td>
              <td>{project['percentage.funded']}%</td>
              <td>
                {project['amt.pledged'].toLocaleString()}{' '}
                {project['currency'].toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <PaginationFooter
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Table;

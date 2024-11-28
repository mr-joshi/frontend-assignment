import {useState} from 'react'
import 
export const Table = ({data=[]}) => {
  const [currentPage,setCurrentPage]=useState(1)
  const recordsPerPage=5;
  const totalRecords = data.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = data.slice(startIndex, startIndex + recordsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  console.log(currentRecords)

  return (
       <div className="container">
      <h1>Project Details</h1>
      <table className="styled-table">
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
              <td>{startIndex + index + 1}</td>
              <td>{project["percentage.funded"]}%</td>
              <td>${project["amt.pledged"].toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Table
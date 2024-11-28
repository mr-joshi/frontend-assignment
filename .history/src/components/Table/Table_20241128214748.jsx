import {useState} from 'react'

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
  
  return (
    <div>{

    }</div>
  )
}

export default Table
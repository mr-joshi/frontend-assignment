import React from 'react'

export const Table = ({data=[]}) => {
  con
  const recordsPerPage=5;
  const totalRecords = data.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = projects.slice(startIndex, startIndex + recordsPerPage);


  return (
    <div>{

    }</div>
  )
}

export default Table
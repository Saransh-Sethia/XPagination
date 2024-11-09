import React from 'react';

const Pagination = ({usersPerPage, nextPage, previousPage, totalUsers, currentPage}) => {
    const pageNumbers = Math.ceil(totalUsers/usersPerPage);
  

  return (
    <div>
      <button className="button" disabled={currentPage === 1 ? true : false} onClick={()=>previousPage()}>Previous</button>
      <button className="current-page">{currentPage}</button>
      <button className="button" disabled={currentPage === pageNumbers ? true : false} onClick={()=>nextPage(pageNumbers)}>Next</button>
    </div>
  )
}

export default Pagination

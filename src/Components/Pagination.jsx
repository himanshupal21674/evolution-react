import React from "react";

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({totalPages, curerntPage, onPageChange}) {
  let pages = createArrayOfSize(totalPages).map((index) => {
    return(
      <button key={index} data-testid="page-btn" 
      onClick={() => onPageChange(index+1)}/>)
    // <button data-testid="page-btn">number</button>;
  });
  return <div>{pages}</div>;
}

export default Pagination;

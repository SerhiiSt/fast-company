import React from "react"
const BookMark = ({ status, ...rest }) => {
  return (
    <button {...rest}>
      <i className={"bi bi-bell" + (status ? "-fill" : "")}></i>
    </button>
  )
}

export default BookMark

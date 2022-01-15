import React from "react"
const SearchStatus = ({ length }) => {
  return (
    <h4>
      <span className={"badge " + (length > 0 ? "bg-success" : "bg-danger")}>
        {length > 0
          ? `${length} will hang out with you`
          : "Nobody will hang out with you"}
      </span>
    </h4>
  )
}

export default SearchStatus

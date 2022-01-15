import React from "react"
import User from "./user"

const Users = ({ users, ...rest }) => {
  return (
    <>
      {users.length && (
        
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Qualities</th>
              <th scope="col">Profession</th>
              <th scope="col">Meet times</th>
              <th scope="col">Value</th>
              <th scope="col">Comment</th>
              <th />
            </tr>
            
          </thead>
          <tbody>
            {users.map((user) => (
              <User {...user} {...rest}></User>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Users

import React, { useState } from "react"
import api from "../api"

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handlePhrase = (number) => {
    if (!number)
      return (
        <h5 class="message-no-people">{"Nobody hang out with you today"}</h5>
      )
    return <h5 class="message">{`Today ${number} people hang out with you`}</h5>
  }

  const handleDelete = (userId) => {
    setUsers((state) => state.filter(({ _id }) => _id !== userId))
  }

  return (
    <table className="table">
      {handlePhrase(users.length)}
      <thead className="table table-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Characters</th>
          <th scope="col">Profession</th>
          <th scope="col">The number of meetings</th>
          <th scope="col">Point</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td key={user._id}>{user.name}</td>
            <td>
              {user.qualities.map((quality) => (
                <span className={`badge rounded-pill bg-${quality.color} me-1`}>
                  {quality.name}
                </span>
              ))}
            </td>
            <td key={user.profession._id}>{user.profession.name}</td>
            <td key={user.completedMeetings}>{user.completedMeetings}</td>
            <td key={user._id}>{user.rate}</td>
            <td>
              <button
                class="button button"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Users

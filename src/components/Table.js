import React from 'react'

const Table = ({usersDetails,currentUsers}) => {
  return (
<table>
    <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
    </thead>
    {
        currentUsers.map((user) => (
            <tbody key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
            </tbody>
        ))
    }
</table>
  )
}

export default Table

import React from 'react'

const Table = ({usersDetails,currentUsers}) => {
  return (
<table>
    <thead>
        <tr className='head'>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        </tr>
    </thead>
    <tbody>
    {
        currentUsers.map((user) => (
           
                <tr key={user.id} className='body'>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                </tr>
            
        ))
    }
    </tbody>
</table>
  )
}

export default Table

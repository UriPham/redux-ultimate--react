import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';

function TableUser() {

  const [listUsers, setListUsers] = useState()

  const fetchAllUser = async () => {
    let res = await axios.get('http://localhost:8080/users/all')
    // console.log('>>>>', res)
    const data = res && res.data ? res.data : []
    // console.log(data)
    setListUsers(data)
  }

  useEffect(() => {
    fetchAllUser()
  }, [])

  const handleDeleteUser = (user) => {
    console.log(user)
  }

  return (
    <Container>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 && listUsers.map((user, index) => {
            return (
              <tr key={`user-${index}`}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <button
                    className='btn btn-warning'
                  >Edit</button>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDeleteUser(user)}
                  >Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableUser;
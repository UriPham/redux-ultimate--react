import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../action/actions';

function TableUser(props) {

  // const [listUsers, setListUsers] = useState()
  const dispatch = useDispatch()
  const listUsers = useSelector(state => state.user.listUsers)
  const isLoading = useSelector(state => state.user.isLoading)
  const isError = useSelector(state => state.user.isError)


  // console.log(listUsers)

  // const fetchAllUsers = async () => {
  //   let res = await axios.get('http://localhost:8080/users/all')
  //   // console.log('>>>>', res)
  //   const data = res && res.data ? res.data : []
  //   // console.log(data)
  //   setListUsers(data)
  // }

  useEffect(() => {
    // fetchAllUsers()
    dispatch(fetchAllUsers())
  }, [])

  const handleDeleteUser = (user) => {
    // console.log(user)
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
          {isError ?
            <>
              <div>Something wrongs, please try again...</div>
            </>
            :
            <>
              {isLoading ?
                <>
                  <div>Loading data...</div>
                </>
                :
                <>
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
                </>
              }
            </>
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default TableUser;
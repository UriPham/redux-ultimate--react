import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUserRedux } from '../action/actions';


function FormAddNew() {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const isCreating = useSelector(state => state.user.isCreating)



  const handleCreateNewUser = () => {
    // console.log(email, username, password)
    dispatch(createNewUserRedux(email, password, username))
    setEmail('')
    setUsername('')
    setPassword('')
  }

  return (
    <>
      <Container>
        <br />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address: </Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username: </Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </Form.Group>
          <Button
            onClick={() => handleCreateNewUser()}
            variant="primary"
            disabled={isCreating}
          >Create</Button>
        </Form>
      </Container>
    </>
  );
}

export default FormAddNew;
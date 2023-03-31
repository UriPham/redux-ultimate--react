import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';

function Header() {

  const listUsers = useSelector(state => state.user.listUsers)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown
              style={{ marginLeft: "50px" }}
              title={`(${listUsers.length}) users`}
              id="basic-nav-dropdown"
            >
              {listUsers && listUsers.length > 0 &&
                listUsers.map((user, index) => {
                  return (
                    <NavDropdown.Item key={`user-${index}`} href="#action/3.1">{user.username}</NavDropdown.Item>
                  )
                })}

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
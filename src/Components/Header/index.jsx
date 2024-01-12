/* eslint-disable react/prop-types */
// import './Navbar.css';
import { Navbar, Container } from 'react-bootstrap';

export const Header = () => {
  // const isAuth = true;
  // const isAdmin = true;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Khều donate</Navbar.Brand>

        <Navbar.Text>
          Signed in as: <a href="">Cyrus</a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"> Logo </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">What We Do</Nav.Link>
          <Nav.Link href="#features">About Us</Nav.Link>
          <Nav.Link href="#pricing"> Contact </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

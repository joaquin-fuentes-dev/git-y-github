import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          Git & GitHub Guide
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#git">Git</Nav.Link>
            <Nav.Link href="#github">GitHub</Nav.Link>
            <Nav.Link href="#workflow">Workflow</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

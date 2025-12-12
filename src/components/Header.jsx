import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="py-4 shadow">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <img
            src="https://img.freepik.com/vector-premium/ilustracion-vectorial-icono-navegador-web-vectorial_921039-10899.jpg?semt=ais_hybrid&w=740&q=80https://img.freepik.com/vector-premium/ilustracion-vectorial-icono-navegador-web-vectorial_921039-10899.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Logo"
            className="rounded-circle"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          Mi Sitio PRO
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Servicios</Nav.Link>
            <Nav.Link>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

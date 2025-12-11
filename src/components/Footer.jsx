import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <p className="mb-0 text-center">
          © 2025 Mi Sitio. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

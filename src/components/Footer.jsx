import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container className="text-center">
        <p className="mb-1">Curso práctico de Git y GitHub</p>
        <small className="text-secondary">
          Ejercicio integrador · GitFlow · Pull Requests · Rebase · Squash
        </small>
      </Container>
    </footer>
  );
}

import { Container, Card, Row, Col, Badge } from "react-bootstrap";

export default function SeccionPrincipal() {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">
        Guía práctica de <Badge bg="primary">Git</Badge> y{" "}
        <Badge bg="dark">GitHub</Badge>
      </h2>

      <Row className="g-4">
        <Col md={4} id="git">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">¿Qué es Git?</Card.Title>
              <Card.Text>
                Git es un sistema de control de versiones que permite registrar
                cambios en el código, volver atrás en el tiempo y trabajar en
                equipo sin pisar el trabajo de otros.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} id="github">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="text-dark">¿Qué es GitHub?</Card.Title>
              <Card.Text>
                GitHub es una plataforma que aloja repositorios Git y facilita
                el trabajo colaborativo mediante Pull Requests, revisiones de
                código y control de versiones en la nube.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} id="workflow">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="text-success">Flujo de trabajo</Card.Title>
              <ul className="mb-0">
                <li>
                  <strong>Merge:</strong> integra ramas manteniendo historial.
                </li>
                <li>
                  <strong>Rebase:</strong> reescribe el historial de forma
                  lineal.
                </li>
                <li>
                  <strong>Cherry-pick:</strong> copia commits puntuales.
                </li>
                <li>
                  <strong>Squash:</strong> une varios commits en uno solo.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

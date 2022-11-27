import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Página Inicial</Navbar.Brand>
          <Nav className="me-auto">
           <Nav.Link href="/About">Sobre mim</Nav.Link>
            <Nav.Link href="/Projects">Projetos</Nav.Link>
            <Nav.Link href="/Skills">Habilidades</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;
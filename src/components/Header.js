import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/header.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className='colortext'>Página Inicial</Navbar.Brand>
          <Nav className="me-auto" id="item">
           <Nav.Link href="/About" className='colortext'>Sobre mim</Nav.Link>
            <Nav.Link href="/Projects" className='colortext'>Projetos</Nav.Link>
            <Nav.Link href="/Skills" className='colortext'>Habilidades</Nav.Link>
            <Nav.Link href="/Contact" className='colortext'>Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;
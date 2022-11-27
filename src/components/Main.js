import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { BsRecord2 } from 'react-icons/bs';
import '../styles/main.css';

class Main extends Component {
  render() {
    return (
      <section className="banner">
        <Container className="teste">
          <Row className="aligh-items-center">
            <Col>
                <div className="infos">
                  <span className="tagline">Bem-vindo(a) ao meu Portfolio!</span>
                  <h1>Olá, meu nome é Pedro Steinmüller Pimentel <span className="wave">👋🏻</span></h1> 
                    <p> <BsRecord2 size={20}/>Campina Grande - Paraíba - Brasil;</p>
                    <p> <BsRecord2 size={20}/>Graduado e Mestre em Física;</p>
                    <p> <BsRecord2 size={20}/>Desenvolvedor Web Fullstack;</p>
                    <p> <BsRecord2 size={20}/>Apaixonado por Games, Rock and Roll, Tecnologia e Cosmologia.</p>
                </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <div className="image">
              <img src="pedinn.jpeg" alt = "pedro" className="myphoto"></img>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  };
}

export default Main;

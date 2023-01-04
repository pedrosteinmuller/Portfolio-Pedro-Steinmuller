import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mySkills from '../helpers/skillsData';
import '../styles/skills.css';

class Skills extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <section className='skill' id='skills'>
        <Container>
          <Row>
            <Col>
            <div className='skill-bx'>
              <h3 className='title'>
                Minhas Habilidades
              </h3>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
              {
                mySkills.map(({ name, image }) => (
              <div key={name}>
                <img src={image} alt="stacks" />
                <p>{name}</p>
              </div>
            ))
          }
              </Carousel>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Skills;


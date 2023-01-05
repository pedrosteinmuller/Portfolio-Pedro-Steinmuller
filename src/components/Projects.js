import React, { Component } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import myProjects from "../helpers/projectData";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import "../styles/projects.css";

class Projects extends Component {
  render() {
    return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Projetos Front-End</h2>
                    <p>
                      A seguir, você poderá visualizar os meus projetos realizados durante
                      o módulo de Front-End na Trybe. Cada projeto possui uma descrição do
                      que é, stacks envolvidas, link do projeto e do repositório no
                      GitHub.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Projetos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Links dos projetos</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible ? "animate__animated animate__slideInUp" : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {myProjects.map((project, index) => {
                              return (
                                <>
                                  <ProjectCard key={index} {...project} />
                                  <div className="stacks">
                                    <h3>Tecnologias:</h3>
                                    <div className="projects">
                                      {project.stacks.map((stack) => (
                                        <img src={stack} alt="stack" />
                                      ))}
                                    </div>
                                    <div className="linksArea">
                                      <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Visualizar Projeto
                                      </a>
                                      <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Repositório do projeto no GitHub
                                      </a>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          {myProjects.map((project, index) => (
                            <div className="links">
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {project.link}
                              </a>
                            </div>
                          ))}
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Projects;

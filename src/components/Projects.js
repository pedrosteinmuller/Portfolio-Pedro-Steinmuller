import React, { Component } from "react";
import myProjects from "../helpers/projectData";

class Projects extends Component {
  render() {
    return (
      <div>
        {myProjects.map((project) => (
          <div>
            <h5>{project.nome}</h5>
            <p>{project.descricao}</p>
            <div>
              <p>
                <strong>Tecnologias:</strong>
                <div>
                  {project.stacks.map((stack) => (
                    <img src={stack} alt="stack" />
                  ))}
                </div>
              </p>
            </div>
            <div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visualizar Projeto
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Repositório do projeto no GitHub
                </a>
              </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;

import { Col } from "react-bootstrap";
import '../styles/ProjectCard.css';

export const ProjectCard = ({ nome, imagem, descricao}) => {
  return (
    <Col size={10} sm={8} md={12}>
      <div className="proj-imgbx">
        <img src={imagem} alt="imagem projeto"/>
        <div className="proj-txtx">
          <h4>{nome}</h4>
          <span>{descricao}</span>
        </div>
      </div>
    </Col>
  )
}
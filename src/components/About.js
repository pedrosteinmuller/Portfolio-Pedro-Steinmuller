import React, { Component } from 'react'
import pedro2 from '../assets/pedro2.jpg';
import pedro3 from '../assets/pedro3.jpg';
import '../styles/About.css';

class Sobremim extends Component {
  render() {
    return (
      <section className="main-container">
        <div className="about-container">
          <p>
          Oi, tenho 26 anos, natural de Campina Grande - Paraíba e vou contar um pouco da minha trajetória de vida e de como cheguei até aqui. Espero que goste desta jornada, onde descrevo sobre meu desenvolvimento, minhas metas, meus sonhos e conquistas que obtive por meio do meu esforço, dedicação, e sentimento de nunca desistir diante das dificuldades, espero que de alguma forma, eu possa te inspirar ou servir como exemplo para algo positivo em sua vida.
          </p>
          <p>
          Desde a minha adolescência, sempre gostei de estudar matemática e física com o intuito de entender o universo, como surgiu, do que é composto, como funciona, e dentre outros aspectos. Porém, durante todo o meu ensino médio, optei por conciliar com o curso técnico do SENAI na área de eletroeletrônica, pois sempre gostava e tinha curiosidade em trabalhar como eletricista, mas após concluir o curso técnico e estagiar na área por quase 2 anos, vi que não era aquilo que eu queria seguir, então comecei a estudar para o ENEM e consegui aprovação em 1º lugar no curso de Licenciatura em Física pela Universidade Estadual da Paraíba (UEPB), onde cursei por 4 anos, me graduei e 1 mês após a conclusão, fiz a prova do mestrado e passei em 2º lugar na Universidade Federal de Campina Grande (UFCG), finalizando em março de 2022.
          </p>
          <p>
          Durante toda minha graduação e mestrado, participei de eventos e programas institucionais como PIBID e Residencia Pedagógica, onde pude adquirir muita experiência como professor, com o propósito de aperfeiçoar as habilidades de lecionar e utilização de metodologias de ensino diferenciadas para enriquecer os estudos dos alunos.

          O que eu tiro de aprendizado e inspiração com as experiências vividas até os dias atuais?
          </p>
          <p>
          Bom, eu pude perceber ao longo da minha vivência, que diante das dificuldades, incertezas e problemas pessoais, é preciso ter calma, paciência, determinação e foco para o que é preciso ser alcançado como meta/objetivo no futuro. Percebi que era preciso pensar e refletir sobre a vida, o que eu estava fazendo, o que eu gostava e não gostava, o que me fazia bem, e o mais importante: qual o próximo passo a ser dado agora, para que eu não me arrepende das minhas decisões futuramente?

          Então, no começo de 2022, após refletir muito sobre o próximo passo a ser dado e o apoio recebido da minha família e amigos, decidi fazer transição de carreira para área de tecnologia/programação. 
          </p>
          <p>
          Conheci a escola Trybe por meio de um grande amigo da minha cidade que comecou a estudar, postava nas redes sociais o seu progresso e estudo do curso, fui adquirindo curiosidade e comecei a estudar e pesquisar sobre a área, me identifiquei e me inscrevi no processo seletivo. No dia seguinte que defendi o  mestrado, já iniciei o curso de Desenvolvedor Web Fullstack na Trybe e está sendo uma experiência incrível, aprendendo coisas novas, melhorando as minhas habilidades de lógica e, principalmente, desenvolvendo não só Hardskills, mas também Softskills que de forma significativa vem trazendo benefícios e me tornando uma pessoa mais madura com experiências que estou vivenciando durante o curso.

          Hoje, eu continuo amando a área de física e de ser professor, mas a paixão e curiosidade de estudar tecnologia/programação foi despertada no começo do meu mestrado e pretendo seguir essa área por muitos anos!
          </p>
        </div>
        <div className="photo-container">
          <img src={pedro2} alt = "pedro" className="photo-about"></img>
          <img src={pedro3} alt = "pedro" className="photo-about"></img>
        </div>
      </section>
    )
  }
}

export default Sobremim;

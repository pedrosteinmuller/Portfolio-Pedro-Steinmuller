import React, { Component } from 'react';
import '../styles/main.css';

class Main extends Component {
  render() {
    return (
      <div className='maincont'>
      <h1 className="heading">
        Olá pessoal!<span className="wave">👋🏻</span>
      </h1>
      <h1 className="heading-name">
        Meu nome é
      <strong className="main-name"> Pedro Steinmüller Pimentel</strong>
      </h1>
      <br/>
      <h2>Desenvolvedor Web FullStack</h2>
        <div className="image">
          <img src="pedinn.jpeg" alt = "pedro" className="myphoto"></img>
        </div>
      </div>
    );
  };
}

export default Main;

import React, { Component } from 'react'
import mySkills from '../helpers/skillsData';
import '../styles/skills.css';

class Skills extends Component {
  render() {
    return (
      <div>
        <p className='title'>Minhas habilidades</p>
        <div className='skillsArea'>
          {
            mySkills.map(({ name, image }) => (
              <div className='skills' key={name}>
                <img src={image} alt="stacks" />
                <p>{name}</p>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Skills;


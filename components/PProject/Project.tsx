import React from 'react';
import Card from './Card';
import style from './style.module.scss';
import pictureGitHub from '../../assets/picture-github.png';
import pitcRespponse from '../../assets/picture-respponse.png';

const Project = function Project() {
  return (
    <section className={ style.projects }>
      <div className={ style.titlesection }>
        <h1>Projetos.</h1>
        <span>Projetos próprios e os quais eu já participei.</span>
      </div>
      <div className={ style.mural }>
        <Card
          link="https://github.com/marlon307/project-respponse"
          url={ pitcRespponse }
          number="1"
          name="Respponse"
        />
        <Card
          link="https://github.com/marlon307/"
          url={ pictureGitHub }
          number="2"
          name="GitHub"
        />
      </div>
    </section>
  );
};

export default Project;
